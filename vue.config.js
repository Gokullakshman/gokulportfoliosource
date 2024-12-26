const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(
  {
    publicPath: process.env.NODE_ENV === 'production' ? '/gokulportfolio/' : '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: '0.0.0.0',
    port:8080  // This will allow access to the app from your local network
  }
}
,
)
