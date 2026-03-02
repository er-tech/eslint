import { Rule } from 'eslint'
import { metaData } from '../../_helpers/metaData'
import { MetaFixable, MetaType } from '../../_types/enum'
import { Node } from 'estree'

class Required implements Rule.RuleModule {
  #defaultExport = undefined
  meta = {
    type: MetaType.SUGGESTION,
    docs: {
      description: 'Ensures that all typescript exported variables, types, enums, functions and classes have TSDoc comments',
      url:         metaData.url(), // URL to the documentation page for this rule
    },
    // fixable:        MetaFixable.CODE,
    hasSuggestions: true,
    schema:         [
      {
        type:       'object',
        properties: {
          variables: {
            // TODO maybe use { 	enum: ["always", "never", "off"] },
            type: 'boolean',
          },
          types: {
            type: 'boolean',
          },
          enums: {
            type: 'boolean',
          },
          functions: {
            type: 'boolean',
          },
          classes: {
            type: 'boolean',
          },
        },
        additionalProperties: false,
      },
    ],
    defaultOptions: [
      {
        variables: true,
        types:     true,
        enums:     true,
        functions: true,
        classes:   true,
      },
    ],
    messages: {
      required: "{{typeName}} '{{name}}' is exported but does not have a TSDoc comment.",
    },
    language: 'typescript',
  }

  create (context) {
    const sourceCode = context.getSourceCode();
      const comments = sourceCode.getAllComments()
  }

  // variables should be defined here



    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    /**
     * Checks if the given node is the default export
     * @param {Node} node 
     * @returns True if the node is the module default export
     */
    #isDefaultExport(node: Node) {
      return (this.#defaultExport && node.id && node.id.name && this.#defaultExport.value === node.id.name);
    }

    /**
     * Checks if a particular entity is exported
     * @param {Node} node 
     */
    #isExported(node) {
      if (isDefaultExport(node)) {
        return true;
      }

      // Check if we find the keyword export before the type declaration
      const sourceCode = context.getSourceCode(node);
      let before = sourceCode.getTokenBefore(sourceCode.getFirstToken(node));
      while (before && before.type == "Keyword") {
        if (before.value == "export") {
          return true;
        }
        before = sourceCode.getTokenBefore(before);
      }
      return false;
    }

    /**
     * Checks if the given node has a TSDoc comment
     * @param {Node} node The node to check
     * @param {String} typeName The type name for logging
     */
    #checkIfNodeHasTSDocComment(node, typeName, name) {
      let comment = getJSDocComment(context.getSourceCode(node), node, { minLines: 0, maxLines: 1 });
      if (!comment) {
        context.report({
          node,
          messageId: "no-tsdoc",
          data: {
            typeName: typeName,
            name: name || (node.id && node.id.name) || '<anonymous>',
          },
        });
      }
    }

    /**
     * Checks if the given need needs and has TSDoc comments
     * @param {Node} node The node to check
     * @param {String} typeName The typename for logging
     */
    #checkType(node, typeName) {
      if (isExported(node)) {
        checkIfNodeHasTSDocComment(node, typeName);
      }
    }
}

const rule: Rule.RuleModule = {
  meta: {
    type: MetaType.SUGGESTION,
    docs: {
      description: 'Ensures that all typescript exported variables, types, enums, functions and classes have TSDoc comments',
      url:         metaData.url(), // URL to the documentation page for this rule
    },
    fixable:        MetaFixable.CODE,
    hasSuggestions: true,
    schema:         [
      {
        type:       'object',
        properties: {
          variables: {
            type: 'boolean',
          },
          types: {
            type: 'boolean',
          },
          enums: {
            type: 'boolean',
          },
          functions: {
            type: 'boolean',
          },
          classes: {
            type: 'boolean',
          },
        },
        additionalProperties: false,
      },
    ],
    defaultOptions: [
      {
        variables: true,
        types:     true,
        enums:     true,
        functions: true,
        classes:   true,
      },
    ],
    messages: {
      required: "{{typeName}} '{{name}}' is exported but does not have a TSDoc comment.",
    },
    language: 'typescript',
  },

  ,
}
