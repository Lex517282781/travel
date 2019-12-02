module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.31.158:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
