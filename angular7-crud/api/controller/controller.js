const express = require('express')
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql"
});

conn.connect(function (err) {
    try {
        console.log('Connected.!')
    } catch (err) {
        console.log(err);
    }
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });
});

let addUser = (data, callback) => {
    console.log('data: ', data);
    let sql = `INSERT INTO customer (first_name, last_name) VALUES ('${data.firstName}', '${data.lastName}')`
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

}

module.exports = {
    addUser: addUser,
    // updateArticle: updateArticle,
    // deleteArticle: deleteArticle,
    // getArticle: getArticle,
    // getArticleById: getArticleById
};