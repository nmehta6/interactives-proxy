var browserSync = require("browser-sync")
var viewerMiddleware = require('./middleware')

browserSync({
	files: 'app/**',
	server: {
		baseDir: './app',
		middleware: [
			viewerMiddleware
		]
	}
})
