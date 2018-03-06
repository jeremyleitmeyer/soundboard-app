const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const request = require('request');


// set the view engine to ejs
app.set('view engine', 'ejs');
// allows public folder to work like Rails' does
app.use(express.static('public'))

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var data = 'sounds I hope'
    res.render('pages/index', {
        data: data
    });
});

// app.get('/user=id/settings', function(req, res){
//     res.render('pages/user_settings')
// })

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Listening on ' + PORT);
