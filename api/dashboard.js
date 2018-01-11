const express = require('express');

//Routs to '/dashboard'
var router = express.Router();

router.get('/', (req, res) => {
    var userData = {
       email: req.session.email,
       category: req.session.category
    }
    res.render('dashboard', userData);
});

module.exports = router;