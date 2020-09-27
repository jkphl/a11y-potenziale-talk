const gulp = require('gulp');
const Slideshow = require('slideshow');
const rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src(['./src/slides/**/*.md', './src/scss/**/*.scss', './src/js/**/*.js'])
        .pipe(Slideshow.stream({
            title: 'Barrierefreie Potenziale — Bildschirmpräsentation vom 29. September 2020',
            author: 'Joschi Kuphal',
            description: 'Momentaufnahme zur Barrierefreiheit im Web',
            language: 'de',
            charset: 'UTF-8',
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch([
        'src/slides/**/*.md',
        'src/scss/**/*.scss',
        'src/js/**/*.js',
    ], gulp.series('default'));
});
