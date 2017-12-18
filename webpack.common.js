const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin"); //Téléchargement de Google fonts
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Simplifie la création de fichiers HTML
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Vide, nettoye le dossier /dist

module.exports = {
    //entry: './src/index.js', //Fichier d'entrée
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        //filename: 'bundle.js', //Fichier de sortie
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist') //Dossier de sortie
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            },

            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },

            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "resolve-url-loader" // resolves relative paths in url() statements based on the original source file
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/, //Scan les fichiers image dans les CSS injectés et le import dan JS
                use: [
                    {
                        loader: 'url-loader', //Loads files as `base64` encoded URL
                        options: {
                            limit: 2000000 //2Mo Si l'image dépasse cette taille, utilisera le module file-loader
                        }
                    },
                    'image-webpack-loader', //Minimise les images, compression : sur mac installer libpng : brew install libpng et redémarrer
                ]
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']), //Vide le dossier dist
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/base.ejs',
            //template: './src/default_index.ejs',
        }),
        /*new GoogleFontsPlugin({
            fonts: [
                {family: "Spectral SC"},
            ],
            filename: "fonts/google-fonts.css",
            path: "fonts/"
        })*/
    ],
};