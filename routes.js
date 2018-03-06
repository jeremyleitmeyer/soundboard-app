// use res.render to load up an ejs view file
app.get('/', function(req, res) {
    var data = 'sounds I hope'
    res.render('pages/index', {
        data: data
    });
});


// app.get('/user=id/settings', function(req, res){
//     res.render('pages/user_settings')
// })
