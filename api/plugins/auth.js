const fp = require('fastify-plugin')
const config = require('../config')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('authorization', function (request, reply, done) {
    const authorization = request.raw.headers.authorization

    if (authorization === config.AUTH_TOKEN) {
      return done()
    }

    reply.code(401).send({error: 'Unauthorized'})
    return done(new Error())
  })
})
