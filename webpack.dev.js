const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: "inline-source-map", //En mode DEV ne fuisionne pas le JS pour facilliter le debug !!! Déactiver en prod !!!
    devServer: { //Petit serveur de dev. A ajouter dans package.json : "start": "webpack-dev-server --open"
        contentBase: './dist'
    },
});

