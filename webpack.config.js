const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    output: 'index.html'
})

module.exports = {
    entry: './src/index.js',
    output: {
        // publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        htmlWebpackPlugin
    ],
    module: {
        rules: [
            { 
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ], // test: what
    }
}