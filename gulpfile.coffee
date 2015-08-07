gulp = require 'gulp'
$    = require('gulp-load-plugins')()

gulp.task 'default', ->
  console.log 'running `gulp default`.'

filepaths =
  css:
    src: [
      './src/styles/*.scss'
    ]
    dst: './public/styles/'

gulp.task 'styles', ->
  return gulp.src filepaths.css.src
    .pipe $.cached 'styles'
    .pipe $.sass({
      style: 'expanded'
    })
    .pipe gulp.dest filepaths.css.dst
