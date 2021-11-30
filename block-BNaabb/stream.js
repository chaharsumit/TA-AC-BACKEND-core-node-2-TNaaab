let http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    res.write(store);
    res.end();
  })
}

server.listen(3456, () => {
  console.log('server is listening on Port:3456');
});