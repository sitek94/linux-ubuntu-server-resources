const http = require('http');

const port = 80;

http.createServer((req,res) => {
  console.log('Someone made request!');

  res.writeHead(200);
  res.write('hello world from linux');
  res.end();
}).listen(port, '192.168.1.11', () => {
  console.log('listening... ', port);
});
