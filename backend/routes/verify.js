const { Router } = require('express');
const { verifyAuth } = require('../module/verifyToken.js');
const router = new Router();

router.post('/auth/:token', verifyAuth, function (req, res) {
    
    let token = req.params.token;
    console.log('Token: ' + token)

    verifyAuth(token, req, res);

});

module.exports = router;