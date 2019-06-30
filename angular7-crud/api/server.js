var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const controller = require('./controller/controller')
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
)

try {

    var Users = require('./routes/Users')
    app.use('/users', Users)
    app.get('/', (req, res) => {
        res.send('Welcome to Node API')
    })

    app.get('/getData', (req, res) => {
        res.json({ 'message': 'Hello World' })
        console.log('23res: ', req.body)
    })

    app.route('/addUser').post((req, res) => {
        let addData = controller.addUser(req.body);
        // if (addData == true) {
            res.send({ message: 'Record added Successfully !' });
        // }
        console.log('36res: ', req.body)
    })

    // app.post('/addUser', bodyParser.json(), (req, res) => {
    //     res.json(req.body)
    //     let addData = controller.addUser(req.body);
    //     if (addData == true) {
    //          res.send({ message: 'Record added Successfully !' });
    //     }
    //     console.log('36res: ', req.body)
    // })

    app.listen(port, function () {
        console.log('Listening on port ' + port);
    });

} catch (err) {
    console.log(err)
}

// const mysql = require('mysql');

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root"
// });
// path = require('path'),

// server = app.listen(port, function () {
//     console.log('Listening on port ' + port);
// });