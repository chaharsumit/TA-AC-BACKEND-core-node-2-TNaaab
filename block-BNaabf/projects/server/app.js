let http = require('http');
let server = http.createServer(handleRequest);

function handleRequest(req, res){
  let store = '';
  let dataFormat = req.headers['content-type'];
}

server.listen(5000, () => {
  console.log('server has started to listen');
});