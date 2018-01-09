const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const dbWrapper = require('./helper/dbWrapper');
var url = 'mongodb://pa_admin:pa%402017@172.16.60.48:27017/node-test?authSource=partner-app';
const path= require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine' , 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dbWrapper.connect(url, (err, res)=>{
    if(err) {
        console.log('Error in connection', err);
    } else {
        console.log('COnnected successfully', res);
    }
});

//Requiring a file where we export routes so that we need not require express and instantiate it everywhere
require('./routes').router(app);


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports = app;