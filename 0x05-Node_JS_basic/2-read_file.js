const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('No valid students in the database');
    }

    console.log(`Number of students: ${lines.length - 1}`); // Exclude header from the count

    const students = lines.map((line) => line.split(','));
    const fields = students[0].slice(1);

    const fieldCounts = {};

    fields.forEach((field) => {
      const fieldIndex = students[0].indexOf(field);
      const studentsInField = students.slice(1).filter((student) => student[fieldIndex] === 'CS' || student[fieldIndex] === 'SWE');
      fieldCounts[field] = {
        count: studentsInField.length,
        list: studentsInField.map(student => student[0]).join(', ')
      };
    });

    Object.entries(fieldCounts).forEach(([field, { count, list }]) => {
      console.log(`Number of students in ${field}: ${count}.
      List: ${list}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
