const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'development', // Define si el build está en modo development (para debugging) o production (para optimización).
  entry: './src/app.js', //Define el archivo de entrada principal de la aplicación.
  output: {
    filename: 'main.js', //archivo de salida.
    path: path.resolve(__dirname, 'public'),//ruta archivo de salida.
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //Extrae CSS en un archivo separado //Reduce el tamaño de los archivos finales
          'css-loader', // Convierte CSS a módulos de JS para que webpack los entienda
          'sass-loader', // CONVIERTE SASS A CSS
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
    new MiniCssExtractPlugin({ //Extrae el CSS compilado en un archivo separado. - mejora el rendimiento
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

