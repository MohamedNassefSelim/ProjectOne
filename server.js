var express = require('express');
var router = require('./app/route');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var DB_URI = "mongodb://localhost:27017/MP";
var app = express();
app.set('view engine', 'ejs');

// var MongoClient = require('mongodb').MongoClient
    // , format = require('util').format;

// MongoClient.connect('mongodb://127.0.0.1:27017/Mnassef', function(err, db) {
//     if(err) throw err;
//
//      collection = db.collection('User');
//
//   });

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static(__dirname+ 'public'));
mongoose.connect(DB_URI);
app.use(router);


app.listen(8080, function(){
  console.log("server is listening on port 8080")
});
