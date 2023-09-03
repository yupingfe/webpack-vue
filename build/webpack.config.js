// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.NODE_ENV == 'production';

// 请只在生产环境下使用 CSS 提取，这将便于你在开发环境下进行热重载。
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

// 配置按需编译
const conditionalCompiler = {
    loader: 'js-conditional-compile-loader',
    options: {
        isOutApp: true
    }
}


const config = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
        }),
        new VueLoaderPlugin()

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader', conditionalCompiler],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [stylesHandler, 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin()
    //     ]
    // }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
