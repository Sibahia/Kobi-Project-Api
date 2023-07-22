const { Router } = require('express');
const { createUser } = require('../module/createUser.js');
const router = new Router();

router.get('/register', function(req, res) {
    res.sendFile('register.html', { root: 'frontend/public' });
});

router.post('/register', createUser, function(req, res) {

    const { name, lastName, username, password } = req.body;

    create(name, lastName, username, password, req, res);

});

module.exports = router;