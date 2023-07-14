const { Router } = require('express');
const { auth } = require('../module/auth.js');
const router = new Router();

router.get('/login', function (req, res) {
    res.sendFile('auth.html', { root: 'frontend/public' });
});

router.post('/login', auth, function(req, res) {

    const { username, password } = req.body;

    auth(username, password, req, res);
    
});

module.exports = router;