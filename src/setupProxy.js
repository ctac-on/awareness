const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/BACKEND',
    createProxyMiddleware({
      target: 'https://backend.promedgarant.ru',
      changeOrigin: true,
    }),
  )
}
