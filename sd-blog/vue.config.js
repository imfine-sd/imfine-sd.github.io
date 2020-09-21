module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/docs/'
    : '/',
  outputDir: '../docs',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: 'https://github.com/imfine-sd/SD_ARCHIVES/raw/master/'
  }
}