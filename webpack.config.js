const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS en un archivo separado
          'css-loader', // Convierte CSS a módulos de JS
          'sass-loader', // Compila SCSS a CSS
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Detecta archivos de fuentes
        type: 'asset/resource', // Usa el tipo 'asset/resource' para moverlos al directorio de salida
        generator: {
          filename: 'assets/fonts/[name][ext]', // Especifica el nombre de salida y la carpeta
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nombre del archivo de salida CSS
    }),
  ],
  optimization: {
    minimize: true, // Habilita la minificación
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false, // Elimina los console.log del código
            drop_debugger: true, // Elimina los debugger
            ecma: 6,             // Usa optimizaciones específicas de ES6
            passes: 2,           // Realiza múltiples pasadas de compresión
          },
        },
        extractComments: false, // No extraer comentarios en un archivo separado
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }, // Elimina todos los comentarios
              normalizeWhitespace: true, // Compacta el espacio en blanco
              mergeRules: true,    // Combina selectores repetidos
            },
          ],
        },
      }), // Minifica el CSS
    ],
  },
};

