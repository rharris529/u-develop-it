const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mySQL username
        user: 'root',
        // mySQL pass
        password: 'falconpunch@++@kk90',
        database: 'election',
    },
    console.log('Connected to the election database.')
);

module.exports = db;