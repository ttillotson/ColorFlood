module.exports = {
    entry: './js/main.js',
    output: {
        filename: './js/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
};
