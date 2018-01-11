const index = require('./api/index');
const authenticate = require('./api/authenticate');
const dashboard = require('./api/dashboard');
const profile = require('./api/profile');
const table = require('./api/table');

module.exports.router = function(app){
    //Calling all APIs
    // '/' calls to index.js
    app.use('/', index);
    app.use('/authenticate', authenticate);
    app.use('/dashboard', dashboard);
    app.use('/profile', profile);
    app.use('/table', table);
};