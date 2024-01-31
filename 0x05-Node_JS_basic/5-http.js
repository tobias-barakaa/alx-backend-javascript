const http = require('http');
const fs = require('fs').promises;

const parseData = (data) => {
  const lines = data.split('\n');
  const studentsByField = {};
  lines.forEach((line) => {
    const [ , field, firstName ] = line.split(',');
    if (!studentsByField[field]) {
      studentsByField[field] = {
        count: 0,
        list: [],
      };
    }
    studentsByField[field].count += 1;
    studentsByField[field].list.push(firstName);
  });
  return studentsByField;
};

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await fs.readFile(process.argv[2], 'utf8');
      const studentsByField = parseData(data);
      let responseMessage = 'This is the list of our students\n';
      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const { count, list } = studentsByField[field];
          const studentsList = list.join(', ');
          responseMessage += `Number of students in ${field}: ${count}. List: ${studentsList}\n`;
        }
      }
      res.end(responseMessage);
    } catch (error) {
      res.statusCode = 500;
      res.end(`Error: ${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
