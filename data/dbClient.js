const knex = require('knex')
const config = require('../knexfile')

const dbClient = knex(config.development)

module.exports = dbClient

