import { Rule, Scope } from 'eslint'

const context: Rule.RuleContext = {} as Rule.RuleContext
export const getSourceCode =
      typeof context.getSourceCode === 'function'
        ? () => {
            return context.getSourceCode();
          }
        : () => {
            return context.sourceCode;
          };
