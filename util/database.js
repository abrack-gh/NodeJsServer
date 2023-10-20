const db = require('mysql2');

const pool = db.createPool({
   host: '127.0.0.1',
   user: 'root',
   database: 'node-complete',
   password: 'root'
});

module.exports = pool.promise();