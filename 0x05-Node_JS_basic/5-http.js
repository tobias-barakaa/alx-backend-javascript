const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const handleRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  let responseBody;

  if (req.url === '/') {
    responseBody = 'Hello Holberton School!';
  } else if (req.url === '/students') {
    const databasePath = process.argv[2]; // Get database path from argument

    if (!databasePath) {
      res.statusCode = 400;
      res.end('Bad Request: Missing database path');
      return;
    }

    countStudents(databasePath)
      .then(() => {
        // Response body already printed by countStudents
        responseBody = 'This is the list of our students';
        res.end(responseBody);
      }).catch((err) => {
        console.error(err);
        res.statusCode = 500;
        res.end('Error loading database');
      });
  } else {
    res.statusCode = 404;
    responseBody = 'Not found';
  }

  // Send response if not already sent in countStudents' promise
  if (!res.headersSent) {
    res.end(responseBody);
  }
};

const app = http.createServer(handleRequest);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
