const index = require('./api/index');
const users = require('./api/users');

module.exports.router = function(app){
    app.use('/', index);
    app.use('/users', users);
};