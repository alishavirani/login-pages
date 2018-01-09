const fs = require('fs');

const db = require('./../helper/dbWrapper');
const User = require('./../models/user').schema;

db.getConnection();

module.exports.getUsers = (emailid, pw, callback) => {
    console.log("Got params in controller =>", emailid, pw);
    
    db.getAll(User, {
        email: emailid,
        password: pw
    }, null, null,(err,user) => {
        if(err) {
            console.log('queries.js', err);
            callback(err, null);
            return;
        }
        console.log("USER=>", user);
        callback(null, user);
        return;
    });

};