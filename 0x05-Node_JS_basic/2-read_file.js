const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('No valid students in the database');
    }

    console.log(`Number of students: ${lines.length}`);

    const students = lines.map((line) => line.split(','));
    const fields = students[0].slice(1);

    fields.forEach((field) => {
      const fieldIndex = students[0].indexOf(field);
      const studentsInField = students.slice(1).map((student) => student[fieldIndex])
        .filter(Boolean);
      console.log(`Number of students in ${field}: ${studentsInField.length}.
      List: ${studentsInField.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
