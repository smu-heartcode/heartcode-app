/**
 * For student to deploy their project.
 */
module.exports = async function (fastify, opts) {
  fastify.post('/library/:username', async function (request, reply) {
    // TODO(fuxing): Deployment
    return {}
  })
}
