const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    entry: './src/index.js', //Fichier d'entrée
    output: {
        filename: 'bundle.js', //Fichier de sortie
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
        new GoogleFontsPlugin({
            fonts: [
                {family: "Spectral SC"},
            ],
            filename: "fonts/google-fonts.css",
            path: "fonts/"
        })
    ],
};