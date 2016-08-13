import gulp from 'gulp';
import gcleanCss from 'gulp-clean-css';

export default () => {
    return gulp
        .src(['source/*.css'])
        .pipe(gcleanCss())
        .pipe(gulp.dest('public'));
}
