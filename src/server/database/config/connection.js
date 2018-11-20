const Sequelize = require('sequelize');
require('env2')('./config.env');
const { DB_CONFIG } = require('../../../../config.js');

const {
  dbname, username, password, host, dialect,
} = DB_CONFIG;
module.exports = new Sequelize(dbname, username, password, {
  host,
  dialect,
  operatorsAliases: false,
  logging: false,
  define: {
    underscored: true,
    timestamps: false,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
