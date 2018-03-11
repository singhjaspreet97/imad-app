var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pool');
var crypto = require('crypta');

var config = {
     user: 'jassi80singh80',
     database: 'jassi80singh80',
     host: 'db.imad.hasura-app.io',
     port: '5432',
     password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

function hash (input,salt) {
    
    var hashed = crypta.pbkdf25ync(input,salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
}

app.get('hash/:input', function(req, res) {
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    req.send(hashedString);
})



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-html.html')); 
});

app.get('/article-two', function(req, res) {
    res.send('Article two requested and will be served here');
});

app.get('/article-three', function(req, res) {
    res.send('Article three requested and will be served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
