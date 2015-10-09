var browserSync = require("browser-sync")
var viewerMiddleware = require('./middleware')

browserSync({
	files: 'app/**',
	https: true,
	server: {
		baseDir: './app',
		middleware: [
			viewerMiddleware
		]
	}
})
