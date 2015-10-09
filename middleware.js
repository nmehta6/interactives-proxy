// var interactiveUrl = require('./package.json').interactiveUrl
//
// console.log('interactiveUrl', interactiveUrl)
//
// var exp = new RegExp('(.*)/interactive/(.*)/index.html')
// var parts = interactiveUrl.match(exp)
//
// console.log(parts)

var modRewrite = require('connect-modrewrite')
var modRewriteConfig = [
	'^(.*)/interactive/9cf282320e6340ee8b830e5376d54531product184614/1441745710d55945/(.*)$ /$2 [L]',
	'^/(.*)$ https://viewer.mediafly.com/$1 [P, L]'
]

module.exports = modRewrite(modRewriteConfig)
