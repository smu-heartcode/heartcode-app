const path = require('path')
const AutoLoad = require('fastify-autoload')
const config = require('./config')

const {default: migrationRunner} = require('node-pg-migrate')

module.exports = async function (fastify, opts) {
  await migrationRunner({
    databaseUrl: config.DATABASE_URL,
    dir: 'migrations',
    direction: 'up'
  })

  await fastify.register(require('fastify-auth'))
  await fastify.register(require('fastify-postgres'), {
    connectionString: config.DATABASE_URL
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
