const jwt = require('jsonwebtoken');
const { dbUser } = require('../src/db');
require('dotenv').config({ path: 'backend/env/.env' });

function createUser (name, lastName, username, password, req, res) {

    let dbGetUsersDates = `SELECT * FROM userDates WHERE username = '${username}'`;
    dbUser.get(dbGetUsersDates, function(err, newUserDatabase) {
        if (err) { console.log(err) };
        if (newUserDatabase) { 
            // res.send('NO');  
            return console.log('Registered user');
        };
    });


    // `INSERT INTO userDates (name, lastName, username, password) VALUES("${name}", "${lastName}", "${username}", "${password}")`
    let dbInsertUserDates = `INSERT INTO userDates (name, lastName, username, password) VALUES('${name}', '${lastName}', '${username}', '${password}')`;
    dbUser.run(dbInsertUserDates, function(err) {
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

module.exports = { createUser }