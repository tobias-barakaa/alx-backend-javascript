const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.length > 0);
    const numberOfStudents = lines.length ? lines.length - 1 : 0;
    console.log(`Number of students: ${numberOfStudents}`);
    const fields = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!fields[student[3]]) fields[student[3]] = [];
      if (student[0] !== 'firstname') fields[student[3]].push(student[0]);
    }
    delete fields.field;
    for (const field of Object.keys(fields)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
