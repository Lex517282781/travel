module.exports = {
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://192.168.2.228:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
