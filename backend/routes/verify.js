const { Router } = require('express');
const { verifyAuth } = require('../module/authenticationUser.js');
const router = new Router();

router.get('/auth/:token', function(req, res) {
    res.sendFile('verify.html', { root: 'frontend/public' });
});

router.post('/auth/:token', verifyAuth, function (req, res) {
    
    let token = req.params.token;

    verifyAuth(token, req, res);

});

module.exports = router;