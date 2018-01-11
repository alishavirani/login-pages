const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbWrapper = require('./helper/dbWrapper');
var url = 'mongodb://pa_admin:pa%402017@172.16.60.48:27017/node-test?authSource=partner-app';
const path = require('path');


var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partial');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
    secret: '1234567890QWERTY',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url:url,
        collection: "sessions",
        stringify: false,
        autoReconnect: true,
        touchAfter: 12000
    })
}));

//To send form data using express
app.use(bodyParser.urlencoded({
    extended: true
}));

dbWrapper.connect(url, (err, res) => {
    if (err) {
        console.log('Error in connection', err);
    } else {
        console.log('COnnected successfully', res);
    }
});

require('./hbsHelpers').helper(hbs);
//Requiring a file where we export routes so that we need not require express and instantiate it everywhere
require('./routes').router(app);


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports = app;