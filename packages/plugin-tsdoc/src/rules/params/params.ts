import { TSESTree } from '@typescript-eslint/types'
import { ESLintUtils } from '@typescript-eslint/utils'
import { RuleFunction } from '@typescript-eslint/utils/ts-eslint'

const createRule = ESLintUtils.RuleCreator((name) => `${name}`)

export const rule = createRule({
  create: (context) => {
    const checkFunction = (
      node: TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression,
      options: { checkMissingDestructured?: boolean },
    ):
      | RuleFunction<TSESTree.FunctionDeclaration | TSESTree.ArrowFunctionExpression>
      | undefined => {
      const checkMissingDestructured = options.checkMissingDestructured || false
      const sourceCode = context.getSourceCode()

      const tokensBefore = sourceCode.getTokensBefore(node).reverse()

      const tokenBeforeTsDoc =
        node.type === TSESTree.AST_NODE_TYPES.FunctionDeclaration
          ? (tokensBefore[0]?.value === 'export'
              ? // Get the `export` token for function declarations.
              tokensBefore[0]
              : // Get the `function` token for function declarations.
              sourceCode.getFirstToken(node))
          : tokensBefore[3]?.value === 'export'
            ? // Get the `export` token for arrow functions.
            tokensBefore[3]
            : ['let', 'var', 'const'].includes(tokensBefore[2].value)
                ? // Get the `let`, `var`, `const` token for arrow functions.
                tokensBefore[2]
                : null

      if (!tokenBeforeTsDoc) {
        return
      }

      const commentNode = sourceCode.getCommentsBefore(tokenBeforeTsDoc)[0]

      // Ignore if there's no comment of if its a single line comment.
      if (!commentNode || commentNode.type === TSESTree.AST_TOKEN_TYPES.Line) {
        return
      }

      const tsDocComment = commentNode.value
        .split('\n')
        .filter((line) => line.trim().startsWith('*'))

      const paramNamesFromTsDoc = tsDocComment
        .filter((line) => line.includes('@param'))
        .map((line) => line.split('@param')[1].trim().split(' ')[0])

      // Check for duplicate param names.
      const duplicateParamNamesFromTsDoc = paramNamesFromTsDoc.filter((value, index, self) => {
        return self.indexOf(value) !== index
      })

      for (const parameterName of duplicateParamNamesFromTsDoc) {
        context.report({
          node:      commentNode,
          messageId: 'duplicateParam',
          data:      { paramName: parameterName },
        })
      }

      const parameterNamesFromFunction: string[] = []

      for (const parameter of node.params) {
        if (parameter.type === TSESTree.AST_NODE_TYPES.Identifier) {
          parameterNamesFromFunction.push(parameter.name)
        } else if (
          parameter.type === TSESTree.AST_NODE_TYPES.AssignmentPattern &&
          parameter.left.type === TSESTree.AST_NODE_TYPES.Identifier
        ) {
          parameterNamesFromFunction.push(parameter.left.name)
        }
      }

      // Check for missing parameter names.
      for (const parameterName of parameterNamesFromFunction) {
        if (!paramNamesFromTsDoc.includes(parameterName)) {
          context.report({
            node:      commentNode,
            messageId: 'missingParam',
            data:      { paramName: parameterName },
          })
        }
      }

      const destructuredParametersCount = node.params.filter(
        (parameter) => parameter.type === TSESTree.AST_NODE_TYPES.ObjectPattern,
      ).length

      if (destructuredParametersCount) {
        // Check for destructured parameters.
        const unmatchedParameterNames = paramNamesFromTsDoc.filter(
          (parameterName) => !parameterNamesFromFunction.includes(parameterName),
        )
        const unmatchedParameterNamesCount = unmatchedParameterNames.length
        if (unmatchedParameterNamesCount > destructuredParametersCount) {
          context.report({
            node:      commentNode,
            messageId: 'excessDestructuredParam',
            data:      {
              count:         destructuredParametersCount,
              got:           unmatchedParameterNamesCount,
              unmatchedTags: unmatchedParameterNames.join(', '),
            },
          })
        } else if (checkMissingDestructured && unmatchedParameterNamesCount < destructuredParametersCount) {
          context.report({
            node:      commentNode,
            messageId: 'missingDestructuredParam',
            data:      {
              count: destructuredParametersCount,
              got:   unmatchedParameterNamesCount,
            },
          })
        }
      } else {
        // Check for invalid parameters names.
        for (const parameterName of paramNamesFromTsDoc) {
          if (!parameterNamesFromFunction.includes(parameterName)) {
            context.report({
              node:      commentNode,
              messageId: 'invalidParam',
              data:      { paramName: parameterName },
            })
          }
        }
      }
    }

    return {
      FunctionDeclaration:     (node) => checkFunction(node, context.options[0] ?? {}),
      ArrowFunctionExpression: (node) => checkFunction(node, context.options[0] ?? {}),
    }
  },

  name: 'validate-tsdoc-params',
  meta: {
    docs: {
      description: 'Validates @param tags in TSDoc comments against function parameters.',
    },
    messages: {
      missingParam: 'Missing TSDoc @param tag for parameter: {{paramName}}.',
      invalidParam:
        'Invalid TSDoc @param tag detected: {{paramName}} is not a parameter of the function.',
      duplicateParam: 'Duplicate TSDoc @param tag for parameter: {{paramName}}.',
      missingDestructuredParam:
        'Mismatch in number of TSDoc @param tags for destructured parameters. Expected {{count}} but got {{got}}. Please add the missing @param tags.',
      excessDestructuredParam:
        'Mismatch in number of TSDoc @param tags for destructured parameters. Expected {{count}} but got {{got}}. Please remove the following @param tags: {{unmatchedTags}}.',
    },
    type:   'problem',
    schema: [
      {
        type:       'object',
        properties: {
          checkMissingDestructured: {
            type:        'boolean',
            description: 'Check for missing destructured parameters in TSDoc comments.',
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [
    {
      checkMissingDestructured: false,
    },
  ],
})

export default rule
