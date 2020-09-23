module.exports = {
  "publicPath": "/",
  "outputDir": "../docs",
  "runtimeCompiler": true,
  "configureWebpack": {
    "devtool": "source-map"
  },
  "devServer": {
    "proxy": "https://github.com/imfine-sd/SD_ARCHIVES/raw/master/"
  },
  "transpileDependencies": [
    "vuetify"
  ]
}