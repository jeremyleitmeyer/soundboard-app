const express = require('express');
const app = express();
const flash = require('connect-flash');
const passport = require('passport');
const bodyParser = require('body-parser');
const request = require('request');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

var PORT = process.env.PORT || 3000;

// connect db
const configDB = require('./config/db.js');
mongoose.connect('configDB.url')

// require('./config/passport')(passport);

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms


// set the view engine to ejs
app.set('view engine', 'ejs');

// allows public folder to work like Rails' does
app.use(express.static('public'));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./app/routes.js')(app, passport);

app.listen(PORT);
console.log('Listening on ' + PORT);
