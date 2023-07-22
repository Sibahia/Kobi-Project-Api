const { Router } = require('express');
const { loginUser } = require('../module/loginUser.js');
const router = new Router();

router.get('/login', function (req, res) {
    res.sendFile('auth.html', { root: 'frontend/public' });
});

router.post('/login', loginUser, function(req, res) {

    const { username, password } = req.body;

    auth(username, password, req, res);
    
});

module.exports = router;