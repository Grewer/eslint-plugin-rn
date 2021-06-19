
module.exports = {
    rules:{
         'no-inner-style': require('./rules/no-inner-style.js')
    },
    configs:{
        recommended: {
          plugins: ['@grewer/rn'],
          rules: {
            '@grewer/rn/no-inner-style': 1
          },
        }
    }
}