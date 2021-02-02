/*
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

/* app.use('/signup',function(req,res){
    console.log("HAI");
    res.sendFile(__dirname+'/views/signup.html');
})

app.post('/check',function(res,req){
    var name = req.body.name;
    var rno = req.body.rno;
    var email = req.body.email;
    var pwd = req.body.pword;
    var pwd2 = req.body.cword;
    var radio = req.body.gen;
    console.log("Registered");
    res.writeHead(200,{'Content-type':'text/html'});

    console.log("Successfully");
    res.write("<h3>Registration done Successfully</h3>");
    res.end();
})
*//*
app.use('/login',function(req,res){
    console.log("HELLO");
    res.sendFile(__dirname+'/views/login.html');
})

app.post('/validate',function(req,res){
    var email = req.body.email;
    var pwd = req.body.pass;
    console.log("Data Submitted");
    res.send(`<center><h3>User name:</h3>${email}<h3>,<br><br> Password:</h3>${pwd}</center>`);
    res.end();
})
 // app.get('/signup');
app.get('/login');
app.listen(1905,()=>{
    console.log("Server is running at the port 1905");
})
*/

var express = require('express')
var app=express();
var bodyParser=require('body-parser');
var port=2001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.use('/rsignup',function(req,res){
    console.log('WELCOME TO NODE JS');
    res.sendFile(__dirname+'/views/rsignup.html');
})

app.post('/validatesignup', function(req,res){
    var name = req.body.name;
    var rno = req.body.rno;
    var email = req.body.email;
    var pword = req.body.pword;
    var cword = req.body.cword;
    var gen = req.body.gen;
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("<h2>YOUR RESPONE HAS BEEN TAKEN SUCCESSFULLY </h2>");
    res.end();
})

app.use('/rlogin',function(req,res){
    console.log('WELCOME TO ITVAC');
    res.sendFile(__dirname+'/views/rlogin.html');
})


app.post('/validatelogin',function(req,res){
    var email = req.body.email;
    var pword = req.body.pword;
    // res.writeHead(200,{'Content-type':'text/html'});
    res.send(`NAME WHICH U ENTERED IN LOGINPAGE : ${email}, PASSWORD WHICH U ENTERED IN LOGINPAGE:${pword}`);
    // res.write("<h2>CONGRATS!! YOU HAVE SUCCESSFULLY LOGGED IN :)</h2>");
    // res.end();
})

app.get('/rsignup');
app.get('/rlogin');

app.listen(port,()=>{
    console.log(`Our Server is running at port ${port}`);
})