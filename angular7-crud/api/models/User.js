const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    }
  }
)

// module.exports = users

// const mysql = require('mysql');

// let Business = new Schema({
//     person_name: {
//       type: String
//     },
//     business_name: {
//       type: String
//     }
//   },{
//       collection: 'business'
//   });
  
//   module.exports = mysql.model('Business', Business);