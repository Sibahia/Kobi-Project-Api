const jwt = require('jsonwebtoken');
const { dbUser } = require('../src/db');
require('dotenv').config({ path: 'backend/env/.env' });

function create (name, lastName, username, password, req, res) {
    dbUser.get(`SELECT * FROM userDates WHERE username = '${username}'`, function(err, newUserDatabase) {
        if (err) { console.log(err) };
        if (newUserDatabase) { 
            // res.send('NO');  
            return console.log('Registered user');
        };
    });

    let dbInsertUserDates = `INSERT INTO userDates (name, lastName, username, password) VALUES('${name}', '${lastName}', '${username}', '${password}')`
    dbUser.run(`INSERT INTO userDates (name, lastName, username, password) VALUES("${name}", "${lastName}", "${username}", "${password}")`, function(err) {
        if (err) { return console.log(err) };
    });

     jwt.sign({ user: username, password: password }, process.env.KEY_SECRET, function (err, token)  {
        if (err) {
            // res.status(400).json({ msg: 'Error' });
            console.log(err);
        } else {
            res.send({ status: 'success', content: token });
            console.log(token);
        }
    });

};

module.exports = { create }