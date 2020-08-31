const fp = require('fastify-plugin')
const jszip = require('jszip')

module.exports = fp(async function (fastify, opts) {
  fastify.addContentTypeParser('application/zip', async function (request, payload, done) {
    const chunks = []
    for await (let chunk of payload) {
      chunks.push(chunk)
    }

    return new jszip().loadAsync(Buffer.concat(chunks))
  })
})
