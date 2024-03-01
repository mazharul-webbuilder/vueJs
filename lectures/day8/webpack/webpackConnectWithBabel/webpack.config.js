module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    // connect babel with webpack
    module:{
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}