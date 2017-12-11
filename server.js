// // server.js
// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
//
// app = express();
// app.use(serveStatic(__dirname + "/dist"));
// var port = process.env.PORT || 5000;
//
// app.listen(port);
// console.log('server started '+ port);
// //
"use strict";

let fs = require('fs');
let https = require('https');
let express = require('express');
let config = require('./config/default');
let serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist"));

let port = process.env.PORT || 5000;

https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(port);

console.log('server started '+ port);
