const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Mendapatkan query parameter dari URL
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || 'Guest'; // Default adalah 'Guest' jika tidak ada query 'name'

  // Mengatur header dan response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!\n`);
});

// Menentukan port server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});