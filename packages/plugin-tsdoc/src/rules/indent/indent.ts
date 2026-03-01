import { TSESLint } from '@typescript-eslint/utils'
import { TSDocParser, ParserContext } from '@microsoft/tsdoc'

export const syntaxRule: TSESLint.RuleModule<'syntax-error', []> = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Validate TSDoc syntax using the official parser.',
      recommended: 'error',
    },
    fixable:  'code',
    messages: {
      'syntax-error': 'TSDoc syntax error: {{message}}',
    },
    schema: [],
  },
  defaultOptions: [],
  create (context) {
    const tsdocParser = new TSDocParser()
    const sourceCode = context.sourceCode

    return {
      Program () {
        const comments = sourceCode.getAllComments()

        for (const comment of comments) {
          // TSDoc only parses block comments starting with /** [2]
          if (comment.type === 'Block' && comment.value.startsWith('*')) {
            const fullComment = `/*${comment.value}*/`
            const parserContext: ParserContext = tsdocParser.parseString(fullComment)

            for (const message of parserContext.log.messages) {
              context.report({
                loc: {
                  start: sourceCode.getLocFromIndex(comment.range + message.textRange.pos),
                  end:   sourceCode.getLocFromIndex(comment.range + message.textRange.end),
                },
                messageId: 'syntax-error',
                data:      {
                  message: message.text,
                },
              })
            }
          }
        }
      },
    }
  },
}
