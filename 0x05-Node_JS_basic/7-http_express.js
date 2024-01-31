const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const filename = process.argv[2]; // Get the database filename from the command line
    const fileContent = await fs.promises.readFile(filename, 'utf-8');
    const [studentsCount, csCount,
      csStudents, sweCount, sweStudents] = await countStudents(fileContent);

    res.type('text/plain');
    res.send(`This is the list of our students\n\nNumber of students: ${studentsCount}\nNumber of students in CS: ${csCount}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing students');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
