const requireIndex = require("requireindex");
const fs = require('fs')

const pluginName = '@grewer/rn'

const rules = requireIndex(__dirname + "/lib/rules")

const keys = Object.keys(rules)

const defaultLevel = keys.map(key => {
    // 这里可以进行更加详细的判断
    return `'${pluginName}/${key}': 1`
})


const temp = keys.map(key => {
    return `'${key}': require('./rules/${key}.js')`
})


const data = `
module.exports = {
    rules:{
         ${temp.join(',')}
    },
    configs:{
        recommended: {
          plugins: ['${pluginName}'],
          rules: {
            ${defaultLevel.join(',')}
          },
        }
    }
}`


fs.writeFileSync('./lib/index.js', data, 'utf8')
