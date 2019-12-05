module.exports = {
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'https://192.168.31.158:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
