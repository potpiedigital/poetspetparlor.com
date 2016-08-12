import gulp from 'gulp';
import ghtmlmin from 'gulp-htmlmin';

export default () => {
    return gulp
        .src(['source/*.html'])
        .pipe(ghtmlmin({
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            quoteCharacter: '"',
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
        }))
        .pipe(gulp.dest('public'));
}
