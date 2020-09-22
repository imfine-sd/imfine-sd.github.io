module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: '../docs',
  runtimeCompiler: true,
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: 'https://github.com/imfine-sd/SD_ARCHIVES/raw/master/'
  }
}