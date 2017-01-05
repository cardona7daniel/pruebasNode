var express=require("express");
var mysql = require('mysql');
var bodyParser=require("body-parser");
var path = require('path');
var app=express();

var port=process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);


app.listen(port, function () {
    console.log("Listening in port " + port);
});

module.exports=app;

