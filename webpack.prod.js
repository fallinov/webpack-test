const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(), //Minification. Autres plugins : nBabelMinifyWebpackPlugin, ClosureCompilerPlugin
        new ScriptExtHtmlWebpackPlugin({ //Permet de paramètrer comment et ou <script> est injectée dans le html
            defaultAttribute: 'async'
        })
    ]
});