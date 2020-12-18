const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = async function (fastify, opts) {
  await fastify.register(require('fastify-cors'))
  await fastify.register(require('fastify-auth'))

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
