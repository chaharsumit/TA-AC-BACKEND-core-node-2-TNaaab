let http = require('http');
let fs = require('fs');
let server = http.createServer(handleRequest);

function handleRequest(req, res){
  fs.createReadStream('./readme.txt').pipe(res);
}

server.listen(5500, () => {
  console.log('server is listening on port:5500');
});