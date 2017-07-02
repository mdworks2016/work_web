var gulp       = require('gulp'),
	browserify = require("browserify"),
	babelify   = require("babelify"),
	source     = require("vinyl-source-stream");

  gulp.task('babelify', function () {
  	browserify('js/chap05-babel.js', { debug: true })
    .transform(babelify, {presets: ['es2015']})
		.bundle()
    .on("error", function (err) {
			console.log("Error : " + err.message);
			this.emit("end");
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('js/dist'))
});
