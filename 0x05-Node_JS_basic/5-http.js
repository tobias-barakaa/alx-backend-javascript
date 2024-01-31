const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  try {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      const databasePath = process.argv[2];
      if (!databasePath) {
        throw new Error('Database path not provided');
      }

      countStudents(databasePath)
        .then((data) => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('This is the list of our students\n');
          res.end(data);
        })
        .catch((error) => {
          console.error(error); // Log error for debugging
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error retrieving student data');
        });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  } catch (error) {
    console.error(error); // Log unexpected errors for debugging
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal server error');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
