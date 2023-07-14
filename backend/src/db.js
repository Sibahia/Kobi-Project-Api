const sql = require('sqlite3').verbose();
const dbUser = new sql.Database('./backend/database/usersDates.db', function(err) {
  if (err) { console.log(err.message) };
});

let dbName = 'CREATE TABLE IF NOT EXISTS userDates (userId INTEGER PRIMARY KEY NOT NULL, name TEXT, lastName TEXT, username TEXT, password TEXT)';

dbUser.run(dbName);

dbUser.all('SELECT * FROM userDates', function(err, dbRows) {
  if (err) { return console.log(err.stack) };

  if (!dbRows) { return console.log(`Haven't users registered on database`) };

//  console.log(`Type of: ${typeof dbRows}`);

// console.log(dbRows[0])
//  dbRows.forEach(rows => { 
//    console.log(rows) 
//    console.log(`${rows.name} | ${rows.lastName}`)
//  });

});

module.exports = { dbUser }

/* const mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'michell88',
  connectionLimit: '10'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE IF NOT EXISTS userdata', function(err) {
    if (err) throw err;
    console.log('Database created')
  });
});

 con.connect(function(err) {
  if (err) throw err;
  console.log('connected!');

  const sql = 'CREATE TABLE IF NOT EXISTS datauser (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), name VARCHAR(255), lastname VARCHAR(255), )';

  con.query(sql, function(err) {
    if (err) throw err;
    console.log('table created')
  });
}); */
 