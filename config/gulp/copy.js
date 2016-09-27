import gulp from 'gulp';

export default () => {
    return gulp
        .src([
            'source/*.{ico,icns,txt}',
            'source/**/*-Regular.ttf',
        ])
        .pipe(gulp.dest('public'));
}
