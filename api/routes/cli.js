const fs = require('fs-extra')
const config = require('../config')

async function write(username, zip) {
  console.log(zip)

  const files = []
  zip.forEach((path, file) => {
    files.push({path, file})
  })

  const promises = files.map(({path, file}) => {
    if (file.dir) {
      return
    }

    return file.async("nodebuffer").then(async buffer => {
      await fs.outputFile(`${config.VAR_WWW}/${username}/${path}`, buffer)
    })
  })

  await Promise.all(promises)
}

/**
 * For student to deploy their project with the builtin CLI. (heartcode deploy)
 */
module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'POST',
    url: '/_cli_/init',
    preHandler: fastify.auth([fastify.authorization]),
    handler: (req, reply) => {
      const {username} = req.body
      req.log.info(`${username}: npm init heartcode-web-dev`)

      reply.send({status: {code: 200}})
    }
  })

  fastify.route({
    method: 'POST',
    config: {},
    url: '/_cli_/deploy/:username',
    preHandler: fastify.auth([fastify.authorization]),
    handler: async (req, reply) => {
      const username = req.params.username

      await write(username, req.body)

      req.log.info(`${username}: npm run deploy`)
      return {status: {code: 200}}
    }
  })
}
