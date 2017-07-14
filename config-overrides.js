module.exports = function override(config, env) {
  const babelLoader = {
    test: /\.(js|jsx)$/,
    include: [/node_modules[\\\/]react-native-*/],
    loader: require.resolve('babel-loader'),
    options: {
      babelrc: false,
      presets: [require.resolve('babel-preset-react-native')],
      cacheDirectory: false,
    },
  }
  config.module.rules.push(babelLoader)

  return config
}
