const index = require('./api/index');
const users = require('./api/users');

module.exports.router = function(app){
    //Calling all APIs
    // '/' calls to index.js
    app.use('/', index);
    app.use('/users', users);
};