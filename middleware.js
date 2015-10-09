var interactiveUrl = require('./package.json').interactiveUrl
var exp = new RegExp('(.*)/interactive/(.*)/index.html')
var parts = interactiveUrl.match(exp)
var modRewrite = require('connect-modrewrite')
var modRewriteConfig = [
	'^(.*)/interactive/' + parts[2] + '/(.*)$ /$2 [L]',
	'^/(.*)$ https://viewer.mediafly.com/$1 [P, L]'
]

module.exports = modRewrite(modRewriteConfig)
