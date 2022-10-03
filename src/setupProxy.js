const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/BACKEND',
    createProxyMiddleware({
      target: 'https://backend.lab-v.ru',
      changeOrigin: true,
    }),
  )
}
