const express = require('express');

//Routs to '/'
var router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

// router.post('/users', (req, res) => {
//     console.log(req.body);
//     res.render('success')
// })

module.exports = router;