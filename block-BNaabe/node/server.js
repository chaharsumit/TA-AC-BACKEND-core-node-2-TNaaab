/*
Path 

console.log(__filename);
console.log(__dirname + 'app.js');
console.log(./index.html);
let path = require('path');
path.join(__dirname, 'index.html');

*/




let http = require('http');
let qs = require('querystring');

let server = http.createServer(handleRequest);

/* 
1.

function handleRequest(req, res){
  if(req.method === 'POST' && req.url === '/'){
    let store = '';
    req.on('data', (chunk) => {
      store+=chunk;
    }).on('end', () => {
      res.statusCode = 201;
      res.end(store);
    })
  }
}

2.

function handleRequest(req, res){
  if(req.method === 'POST' && req.url === '/'){
    let store = '';
    req.on('data', (chunk) => {
      store+=chunk;
    }).on('end', () => {
      res.statusCode = 201;
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    })
  }
}

*/


