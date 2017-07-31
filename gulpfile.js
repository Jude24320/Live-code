/**
 * Created by simplon on 25/07/17.
 */

//gulp.task = assigner une tache
//gulp.src = chercher le/les fichier.s à importer
//gulp.dest = la destination du/des fichier.s

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('copieHTML',function(){
  gulp.src('App/*.html')
    .pipe(gulp.dest('dist/App'))
});

gulp.task('sass',function(){
  gulp.src('App/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/App/css'))
});

gulp.task('uglify',function(){
  gulp.src('App/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/App/js'))
});

gulp.task('watch', function(){
  gulp.watch('App/scss/*.scss',['sass'])
  gulp.watch('App/*.html',['copieHTML'])
  gulp.watch('App/js/*.js',['uglify'])
});
