const express = require('express');
var router = express.Router();
const queries = require('./../controller/queries');

router.post('/', (req, res) => {
    console.log("params =>", req.body);
    queries.getUsers(req.body.email, req.body.password, (err, result) => {
        if (err) {
            console.log('Error in api', err);
            res.json({message: "Internal error"});
            return;
        }
        console.log("Inside users result", result);
        if (!result) {
            console.log("Invalid result");
            res.json({message: "Invalid credentials"});
            return;
        }
        req.session.email = result.email;
        req.session.category = result.category;
        req.session.id = result._id;

        var userDetails = {
            userName: result.email,
            category: result.category
        }
        console.log("userDetails =>", userDetails);

        res.json(userDetails);
        // switch (result.email) {
        //     case "abc@gmail.com":
        //         res.render('dashboard', userDetails);
        //         break;

        //     case "pqr@gmail.com":
        //         res.render('table', userDetails);
        //         break;

        //     case "xyz@gmail.com":
        //         res.render('user', userDetails);
        // }

    });

    //     res.render('success', {        userName     });     return; });
});

module.exports = router;