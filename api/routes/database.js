module.exports = async function (fastify, opts) {

  fastify.route({
    method: 'GET',
    config: {},
    url: '/library/:username',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const {username} = req.params
      const {rows} = await fastify.pg.query(
        'SELECT id, username, body FROM library WHERE username=$1 ORDER BY id DESC LIMIT 100',
        [username]
      )
      return {data: rows}
    }
  })

  fastify.route({
    method: 'GET',
    config: {},
    url: '/library/:username/:id',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const {username, id} = req.params
      const {rows} = await fastify.pg.query(
        'SELECT id, username, body FROM library WHERE username=$1 AND id=$2',
        [username, id]
      )
      return {data: rows[0]}
    }
  })

  fastify.route({
    method: 'PUT',
    config: {},
    url: '/library/:username',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const {username} = req.params
      const data = await fastify.pg.query(
        'INSERT INTO library (username, body) VALUES ($1, $2)',
        [username, req.body]
      )
      return {data: data}
    }
  })

  fastify.route({
    method: 'PUT',
    config: {},
    url: '/library/:username/:id',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const {username, id} = req.params
      await fastify.pg.query(
        'UPDATE library SET body=$1 WHERE username=$2 AND id=$3',
        [req.body, username, id]
      )
      return {}
    }
  })

  fastify.route({
    method: 'DELETE',
    config: {},
    url: '/library/:username/:id',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const {username, id} = req.params
      await fastify.pg.transact(
        'DELETE FROM library WHERE username=$1 AND id=$2',
        [username, id]
      )
      return {}
    }
  })
}
