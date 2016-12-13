import gulp from 'gulp';

export default () => {
    return gulp
        .src([
            'source/*.{ico,icns,txt}',
            'source/**/*.{eot,otf,ttf,svg,woff,woff2}',
        ])
        .pipe(gulp.dest('public'));
}
