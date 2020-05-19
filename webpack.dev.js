const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  watch: true,
});


// const path = require('path');

// const SRC_DIR = path.join(__dirname, '/client/src');
// const DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/app.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         loader: 'babel-loader',
//         options: {
//           babelrc: true
//         }
//       },
//       {
//         test: /\.css$/i,
//         exclude: /node_modules/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//         ],
//       },
//     ]
//   }
// };
