require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

module.exports = {
  test: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './seeds/test'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './seeds/development'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    seeds: {
      directory: './seeds/production'
    }
  },
};
