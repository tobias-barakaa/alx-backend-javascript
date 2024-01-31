const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const port = 1245;
const databasePath = process.argv[2];

const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudentsHandler(res);
  } else {
    // Handle other routes with a 404 response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

function countStudentsHandler(res) {
  countStudents(databasePath)
    .then(() => {
      return fs.promises.readFile(databasePath, 'utf8');
    })
    .then((data) => {
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Check if there are any students
      if (lines.length <= 1) {
        res.end('This is the list of our students\nNumber of students: 0');
        return;
      }

      // Get the header and field indices
      const header = lines[0].split(',');
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      // Count the number of students in each field
      const studentsByField = {};
      lines.slice(1).forEach(line => {
        const values = line.split(',');
        const field = values[fieldIndex].trim();
        const firstName = values[firstNameIndex].trim();

        if (!studentsByField[field]) {
          studentsByField[field] = {
            count: 0,
            list: [],
          };
        }

        studentsByField[field].count += 1;
        studentsByField[field].list.push(firstName);
      });

      // Build the response message
      let responseMessage = 'This is the list of our students\n';
      responseMessage += `Number of students: ${lines.length - 1}\n`;

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const count = studentsByField[field].count;
          const list = studentsByField[field].list.join(', ');
          responseMessage += `Number of students in ${field}: ${count}. List: ${list}\n`;
        }
      }

      res.end(responseMessage);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.end(`Error: ${error.message}`);
    });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
