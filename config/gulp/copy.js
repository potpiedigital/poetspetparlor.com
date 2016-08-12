import gulp from 'gulp';

export default () => {
    return gulp
        .src(['source/*.{ico,icns,txt}'])
        .pipe(gulp.dest('public'));
}
