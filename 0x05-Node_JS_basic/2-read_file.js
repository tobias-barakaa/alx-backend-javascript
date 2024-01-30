const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Check if there are any students
    if (lines.length <= 1) {
      throw new Error('No students found in the database');
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
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in studentsByField) {
      const count = studentsByField[field].count;
      const list = studentsByField[field].list.join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

module.exports = countStudents;