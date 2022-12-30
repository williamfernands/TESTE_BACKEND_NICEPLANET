const mysql = require('mysql2');
const pool = require('mysql2');

var pool = mysql.createPool({
   connectionLimit: 100,
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   port: process.env.DB_PORT
});
pool.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})


exports.pool = pool;
