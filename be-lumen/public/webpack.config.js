module.exports = {
    entry: [
        './js/entry.js'
    ],
    output: {
        filename: 'static/bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader: 'babel'
            }
        ]
    }
};