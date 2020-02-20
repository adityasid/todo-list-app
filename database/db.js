const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('sql12289652', 'sql12289652', 'kxic9xtRID', {
  host: 'sql12.freemysqlhosting.net:3306',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
