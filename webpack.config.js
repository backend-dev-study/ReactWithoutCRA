const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/index.tsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        historyApiFallback: true, // HistoryAPI 사용 시 404 에러가 발생하면 index.html로 리다이렉트
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 번들링의 대상이 될 파일 확장자
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset/resource"
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
