let http = require('http');

let qs = require('querystring');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let dataFormat = req.headers['content-type'];
  let store = '';

  req.on('data', (chunk) => {
    store += chunk;
  })

  req.on('end', () => {
    if(dataFormat === 'application/json'){
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if(dataFormat === 'application/x-www-form-urlencoded'){
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  })
}

server.listen(7000, () => {
  console.log('server is listening on port:7000');
});