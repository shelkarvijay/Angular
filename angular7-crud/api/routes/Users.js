const express = require('express');
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())
process.env.SECRET_KEY = 'secret'

// users.post('/addUser', (req, res) => {
//   console.log('req: ', req);
// })

module.exports = users

// const app = express();
// const businessRoutes = express.Router();

// // Require Business model in our routes module
// let Business = require('../models/User');

// // Defined store route
// businessRoutes.route('/addUser').post(function (req, res) {
//   let business = new Business(req.body);
//   business.save()
//     .then(business => {
//       res.status(200).json({'business': 'business in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });


// module.exports = businessRoutes;