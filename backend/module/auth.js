const jwt  = require('jsonwebtoken');
const { dbUser } = require('../src/db');
require('dotenv').config({ path: 'backend/env/.env' });

function auth (username, password, req, res) {

    dbUser.get(`SELECT * FROM userDates WHERE (username = "${username}")`, function(err, userDatabase) {
        if (err) { return console.log(err) };

        if (!userDatabase) { return res.send({ status: false, msg: 'El usuario no existe' }) };
    
        if (userDatabase.username == username && userDatabase.password == password) {
            jwt.sign({ user: username, password: password}, process.env.KEY_SECRET, function(err, token) {

            if (err) {
                res.send({ status: false, msg: 'Error login' });
                console.log(err);
             } else { 
                res.send({ status: true, content: token });
                /*console.log(token);*/
             }
            });
        } else {
            res.send({ status: false, msg: 'Error username/password incorrecta' })
        };
    });
};

module.exports = { auth }

/*

    dbUser.get(`SELECT * FROM userDates WHERE (username = "${username}")`, function(err, userDatabase) {
        if (err) { return console.log(err) };

        if (!userDatabase) { res.send({ status: false, msg: 'El usuario no existe' }) };

        // console.log(`User --->>>[ ${userDatabase.username} \nPassword --->>>[ ${userDatabase.password}`);

        if (userDatabase.username == username && userDatabase.password == password) {
            jwt.sign({ user: username, password: password }, 'bluelock', function(err, token) {
                if (err) {
                    res.send({ status: false, msg: 'Error login' });
                    console.log(err);
                } else {
                    res.send({ status: true, content: token, msg: 'Login success' });
                    console.log(token);
                };
            });

            // res.redirect('/home');
        } else {
            res.send({ status: false, msg: 'Error contraseña equivocada' })
        };
    });

*/