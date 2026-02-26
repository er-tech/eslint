import { Rule } from 'eslint'

const meta: Rule.RuleMetaData = {
  type: 'problem',
  docs: {
    description: 'Ensures that all typescript exported types and classes have TSDoc comments',
    recommended: true,
    url: null, // URL to the documentation page for this rule
  },
  language: 'typescript',
  messages: