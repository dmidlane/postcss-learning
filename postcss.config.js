module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-import'),
        require('postcss-simple-vars'),
        require('postcss-preset-env')({
            stage: 1
        }),
        require('postcss-assets')({
            loadPaths: ['dist/img']
        }),
        require('cssnano')({
            preset: 'default'
        })
    ]
}