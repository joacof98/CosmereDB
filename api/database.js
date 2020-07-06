const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'kaioken123',
    database: 'cosmere'
});

module.exports = db;