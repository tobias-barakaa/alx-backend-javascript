const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    await countStudents(databasePath);
    const data = await fs.promises.readFile(databasePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Check if there are any students
    if (lines.length <= 1) {
      res.send('This is the list of our students\nNumber of students: 0');
      return;
    }

    // Get the header and field indices
    const header = lines[0].split(',');
    const fieldIndex = header.indexOf('field');
    const firstNameIndex = header.indexOf('firstname');

    // Count the number of students in each field
    const studentsByField = {};
    lines.slice(1).forEach((line) => {
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
        const { count, list } = studentsByField[field];
        const studentsList = list.join(', ');
        responseMessage += `Number of students in ${field}: ${count}. List: ${studentsList}`;
      }
    }

    res.send(responseMessage);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
