const express = require('express');

//Routs to '/profile'
var router = express.Router();

router.get('/', (req, res) => {
    var userData = {
        email: req.session.email,
        category: req.session.category
     }
    res.render('profile', userData);
});

module.exports = router;