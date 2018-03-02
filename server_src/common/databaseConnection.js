'use strict'

const { Pool } = require('pg')

//const pool = new Pool()

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todos',
  password: 'password',
  port: 5432,
})

module.exports = {
  query: async (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  getClient: async (callback) => {
    pool.connect((err, client, done) => {
      callback(err, client, done)
    });
  }
}
