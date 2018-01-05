const express = require('express');

const queries = require('./../controller/queries');

var router = express.Router();


router.post('/', (req, res) => {
    console.log("params =>", req.body);
    queries.getUsers(req.body.email, req.body.password, (err, result) => {
        if(err) {
            console.log('Error in api', err);
            res.render('home');
            return;
        }
        console.log('success in api', result);
        res.render('success');
        return;
    })
});

module.exports = router;