const express = require('express');

//Routs to '/'
var router = express.Router();

router.get('/', (req, res) => {
    var userData = {
        email: req.session.email,
        category: req.session.category
     }
    res.render('home', userData);
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('home');
});

module.exports = router;