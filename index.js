var express=require('express');
var app=express();
// var passport=require('passport');
// var GoogleStrategy=require('passport-google-oauth20').Strategy();
var hbs = require('hbs');

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/default.html');
});


const PORT = process.env.PORT || 80;
app.listen(PORT); 
