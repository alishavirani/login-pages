const express = require('express');

//Routs to '/table'
var router = express.Router();

router.get('/', (req, res) => {
    var userData = {
        email: req.session.email,
        category: req.session.category
     }
    res.render('table', userData);
});

module.exports = router;