module.exports = async function (fastify, opts) {

  fastify.route({
    method: 'GET',
    config: {},
    url: '/documents/:id',
    handler: async (req, reply) => {
      const {id} = req.params
      const {rows} = await fastify.pg.query(
        'SELECT body FROM document WHERE id=$1',
        [id]
      )

      if (rows.length) {
        return rows[0].body
      }

      return reply.code(404).send({})
    }
  })

  fastify.route({
    method: 'PUT',
    config: {},
    url: '/documents/:id',
    preHandler: fastify.auth([fastify.adminAuthorization]),
    handler: async (req, reply) => {
      const {id} = req.params

      const {rows} = await fastify.pg.query('SELECT id FROM document WHERE id=$1', [id])
      if (rows.length) {
        await fastify.pg.query(
          'UPDATE document SET body = $2 WHERE id = $1', [id, req.body]
        )
      } else {
        await fastify.pg.query(
          'INSERT INTO document (id, body) VALUES ($1, $2)', [id, req.body]
        )
      }

      return {}
    }
  })
}
