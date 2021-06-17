// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Q_werty12345',
    database: 'knex'
  },
  pool: { min: 0, max: 7 }
  },

  staging: {
    client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Q_werty12345',
    database: 'nodedb'
  },
  pool: { min: 0, max: 7 }
  },

  production: {
    client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Q_werty12345',
    database: 'nodedb'
  },
  pool: { min: 0, max: 7 }
  }

};
