let http = require('http');
let fs = require('fs');
let qs = require('querystring');
let url = require('url');

let server = http.createServer(handleRequest);

let usersPath = __dirname + '/users/';

function handleRequest(req, res){
  let parsedUrl = url.parse(req.url, true);
  let store = '';

  req.on('data', (chunk) => {
    store+=chunk;
  })

  req.on('end', () => {
    if(req.url === '/users' && req.method === 'POST'){
      let username = JSON.parse(store).username;
      fs.open(usersPath + username + '.json', 'wx', (err, fd) => {
        if(err){
          return console.log(err);
        }
        fs.writeFile(fd, store, (err) => {
          if(err){
            return console.log(err);
          }
          fs.close(fd, () => {
            res.end(`${username} was succesfully created`);
          });
        });
      });
    }

    if(parsedUrl.pathname === '/users' && req.method === 'GET'){
      let username = parsedUrl.query.username;
      fs.readFile(usersPath + username + '.json', (err, content) => {
        if(err){
          return console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(content);
      });
    }
  });
}

server.listen(5000, () => {
  console.log('server is listening');
})