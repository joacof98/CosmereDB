const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'here your password',
    database: 'cosmere'
});

module.exports = db;