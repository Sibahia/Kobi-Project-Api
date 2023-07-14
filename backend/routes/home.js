const { Router } = require('express');
const router = new Router();

router.get('/home', function(req, res) {
    res.sendFile('home.html', { root: 'frontend/public' });

    // console.log(req.headers);



        //const { token } = req.headers.autorization;

});

module.exports = router;