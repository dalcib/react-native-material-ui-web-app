const path = require('path')
module.exports = function override(config, env) {
  const babelLoader = {
    test: /\.(js|jsx)$/,
    include: [
      /node_modules[\\\/]react-native-(?!(vector-icons|web|material-design-styles)).*/,
    ],
    loader: 'babel-loader',
    options: {
      babelrc: false,
      //plugins: ['react-native-web/babel'],
      presets: ['react-native'],
      cacheDirectory: false,
    },
  }
  config.module.rules.push(babelLoader)
  config.resolve.alias['react-native-vector-icons'] =
    'react-native-vector-icons/dist'

  return config
}
