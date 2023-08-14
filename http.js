const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.write('About');
    res.end();
    return;
  }
  res.write('Hello');
  res.end();
});
server.listen(3000);

server.get('/about', (req, res) => res.send('Hello'));
