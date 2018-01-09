const express = require('express');
var router = express.Router();
const queries = require('./../controller/queries');


router.post('/', (req, res) => {
    console.log("params =>", req.body);
    queries.getUsers(req.body.email, req.body.password, (err, result) => {
        if(err) {
            console.log('Error in api', err);
            res.render('home');
            return;
        }
        
        console.log('success in api', result);

        let userName = req.body.email;
        console.log(userName);

        res.render('success', {
            userName
        });
        return;
    });
});

module.exports = router;
