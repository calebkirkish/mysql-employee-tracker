'use strict';

const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    hotst: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;