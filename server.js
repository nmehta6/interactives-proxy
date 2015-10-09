var browserSync = require("browser-sync")
var modRewrite = require('connect-modrewrite')
var modRewriteConfig = [
	'^(.*)/interactive/9cf282320e6340ee8b830e5376d54531product184614/1441745710d55945/(.*)$ http://localhost:3000/$2 [L]',
	'^(.*)$ https://viewer.mediafly.com/$1 [P, L]'
]

browserSync({
	files: 'app/**',
	server: {
		baseDir: './app',
		middleware: [
			modRewrite(modRewriteConfig)
		]
	}
})
