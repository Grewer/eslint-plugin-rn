/**
 * @fileoverview jsx render cannot write style
 * @author grewer
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "jsx render cannot write style",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            JSXAttribute: node => {
                const propName = node.name && node.name.name;
                if (propName === 'style') {
                    // console.log(node.value.expression)
                    if (node.value.expression.type === 'ObjectExpression') {
                        const arr = node.value.expression.properties
                        // 如果 style 中有表达式, 则不判断
                        for (let i = 0, len = arr.length; i < len; i++) {
                            if (arr[i].value.type === 'ConditionalExpression') {
                                return
                            }
                        }
                        context.report({
                            node,
                            message: "不要使用行内样式",
                        });
                    }
                }
            }
        }

    }
};
