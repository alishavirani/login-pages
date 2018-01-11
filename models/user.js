const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema ({
    email: String,
    password: String,
    category : String
}, {collection: 'Login'})

  


// var User = mongoose.model('Login' , {
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 1
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength:1
//     }
// });

module.exports.schema = User;
