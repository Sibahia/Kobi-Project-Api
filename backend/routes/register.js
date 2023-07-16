const { Router } = require('express');
const { create } = require('../module/create.js');
const router = new Router();

router.get('/register', function(req, res) {
    res.sendFile('register.html', { root: 'frontend/public' });
});

router.post('/register', create, function(req, res) {

    const { name, lastName, username, password } = req.body;

    create(name, lastName, username, password, req, res);

});

module.exports = router;