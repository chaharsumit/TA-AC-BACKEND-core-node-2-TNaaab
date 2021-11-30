let http = require('http');
let qs = require('querystring');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let store = '';
  let dataFormat = req.headers['content-type'];
  req.on('data', (chunk) => {
    store+=chunk;
  })

  req.on('end', () => {
    if(req.method === "POST" && dataFormat === 'application/json'){
      let parsedData = JSON.parse(store);
      res.statusCode = 201;
      res.end(store);
    }
    if(req.method === "POST" && dataFormat === 'application/x-www-form-urlencoded'){
      let parsedData = qs.parse(store);
      res.statusCode = 201;
      res.end(JSON.stringify(parsedData));
    }
  })
}

server.listen(5000, () => {
  console.log('server is listening on port: 5000');
});

