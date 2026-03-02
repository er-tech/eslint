import { TSDocParser, ParserContext } from '@microsoft/tsdoc'
import { MetaType } from '../../_types/enum'
import { createRule } from '../../_helpers/createRule'

const tsdocParser = new TSDocParser()

export const syntaxRule = createRule({
  name:           'syntax',
  defaultOptions: [],
  meta:           {
    type: MetaType.SUGGESTION,
    docs: {
      description:          'Validate TSDoc syntax using the official parser.',
      recommended:          true,
      requiresTypeChecking: true,
    },
    fixable:  'code',
    messages: {
      syntax: 'TSDoc syntax error: {{message}}',
    },
    schema: [],
  },
  create (context) {
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
                  start: sourceCode.getLocFromIndex(comment.range[0] + message.textRange.pos),
                  end:   sourceCode.getLocFromIndex(comment.range[1] + message.textRange.end),
                },
                messageId: 'syntax',
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
})
