const express = require('express');
var router = express.Router();
const queries = require('./../controller/queries');

router.post('/', (req, res) => {
    console.log("params =>", req.body);
    queries.getUsers(req.body.email, req.body.password, (err, result) => {
        if (err) {
            console.log('Error in api', err);
            res.render('home', {message: "Internal error"});
            return;
        }
        console.log("Inside users result",result);
        if (!result) {
            console.log("Invalid result");
            res.render('home', {message: "Invalid credentials"});

            return;
        }

        let userName = result.email;
        console.log(result.email);

        switch (result.email) {
            case "abc@gmail.com":
                res.render('success1', {userName});
                break;

            case "pqr@gmail.com":
                res.render('success2', {userName});
                break;

            case "xyz@gmail.com":
                res.render('success3', {userName});
        }

    });

    //     res.render('success', {        userName     });     return; });
});

module.exports = router;