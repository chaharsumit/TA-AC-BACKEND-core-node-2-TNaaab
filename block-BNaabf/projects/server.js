let http = require('http');
let fs = require('fs');
let qs = require('querystring');
let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let store = '';
  let dataFormat = req.headers['content-type'];
  
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    if(req.url === '/form' && req.method === 'GET'){
      res.writeHead(201, { 'Content-Type': 'text/html' });
      fs.createReadStream('./form.html').pipe(res);
    }
    if(req.method === 'POST' && req.url === '/form'){
      let parsedData = qs.parse(store);
      res.writeHead(201, {'Content-Type': 'text/html'});
      res.write(`<h2>${parsedData.name}</h2>`);
      res.write(`<p>${parsedData.email}</p>`);
      res.write(`<p>${parsedData.age}</p>`);
      res.end();
    }
  })
} 

server.listen(5678, () => {
  console.log('server has started to listen');
});