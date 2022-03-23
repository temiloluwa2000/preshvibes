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
   res.sendFile( __dirname);
   res.sendFile(path.join(__dirname + '/sport/index.html'));
});