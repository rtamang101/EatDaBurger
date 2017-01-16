var mysql = require('mysql');

var connection;
if (process.env.JAWSDB_URL) {
    console.log("Connect to JAWSDB:", process.env.JAWSDB_URL);
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3307,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers'
    });
};

connection.connect(function (err) {
    if(err) {
        console.error('error connection: ' + err.stack);
        return;     
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;