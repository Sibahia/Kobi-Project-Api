const mysql = require('mysql');

var con = mysql.createConecction({
  host: 'localhost',
  user: 'danny',
  password: 'michell88',
  database: 'userdata'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('connected!');

  const sql = 'CREATE TABLE IF NOT EXISTS datauser (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), name VARCHAR(255), lastname VARCHAR(255), )';

  con.query(sql, function(err) {
    if (err) throw err;
    console.log('table created')
  });
});
