const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'backend/env/.env' });

function verifyAuth (token, req, res) {

    let authToken = token.params.token;

    jwt.verify(authToken, process.env.KEY_SECRET, function(err, jwtToken) {

        if (err) {
            return console.log(err);
             res.send({ status: false, msg: 'Error token' });
        } else {
            res.sendFile('verify.html', { root: 'frontend/public' });
            res.redirect('/home');
            // res.send({ status: true, content: jwtToken });
        }
    });
};

module.exports = { verifyAuth }