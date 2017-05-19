'use strict';

const http = require('http');
const p = require('./ports');
const server = http.createServer((req, res) => {
  if (req.url ==='/') {
    res.setHeader('conent-type','text/html');
  res.end(`
    <!doctype html>
    <body>
     <h1> ${p.upper(__dirname)} </h1>
     <h3> ${p.up(__dirname)} </h3>
     <p> what a body =P </p>
    </body>
    `)
  }else {
    res.end('UNKNOWN')
  }
})
 server.listen(8080, () => console.log('Started our server'));
