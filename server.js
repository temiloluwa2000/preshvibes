process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const { Client } = require('pg');
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const client = new Client({
  connectionString: "postgres://yefgusbunvmpdd:b9cdaea069699611f03815143f55f4c8a4f770a2e15ff38e025523ea9d310472@ec2-34-192-83-52.compute-1.amazonaws.com:5432/dfktqcr7hqlkvc",
  ssl: true,
});

client.connect();	

var myapp = express();
const path = require('path');
const router = express.Router();

myapp.use(function(req, res, next){ 
req.headers['content-type'] = "application/json"; 
next();
});

myapp.get('/', function(req, res) {

   res.sendFile(path.join(__dirname + '/sport/indexx.html'));
});
myapp.use(express.static(__dirname + '/sport'));
myapp.use(bodyParser.urlencoded({ extended: true }));
myapp.use(bodyParser.json());

myapp.post('/registration', function (req, res) {
client.connect();	

var datae = {};
var user = {};
var mymail = req.body.email;
var fname = req.body.fname;
var lname = req.body.lname;
var mypass = req.body.pass;
var mypasso = req.body.passo;
var myaddress = req.body.address;
var myphone = req.body.phone;
var isadmin = req.body.select;
var maId = 3;

if(errt){ 
datae['status'] = 404;
datae['error'] = "Error: Connection Not Secure...";
res.send(datae);
}else{ 
client.query("SELECT id FROM users ORDER BY id DESC;", (errf, respf) => {
if (errf){
	
}else{
var newId = respf.rows[0].id + 1;	
const text = "INSERT INTO users(id,fname,lname,pass,passo,address,email,phone,select) VALUES('"+ newId +"', '"+ fname +"', '"+ lname +"', '"+ mypass +"', '"+ myaddress +"', '"+ mymail +"', '"+ myphone +"', '"+ select +"') RETURNING id;";

client.query(text, (err, resp) => {
if (err){
datae['status'] = 404;
datae['error'] = "Error: Problem occur when signing up...";
res.send(datae);
}else{
	
datae['status'] = 200;
datae['fname'] = fname;
datae['lname'] = lname;
datae['message'] = "Registration was Successful";

res.send(datae);
}
});
}
});
}
});


const portr = process.env.PORT || 3000;
myapp.listen(portr);