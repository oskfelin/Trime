const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', () => {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
        .pipe(gulp.dest('dist'));
});