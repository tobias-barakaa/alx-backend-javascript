const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
          reject(new Error('Cannot load the database'));
        }

        console.log(`Number of students: ${lines.length}`);

        const students = lines.map((line) => line.split(','));
        const fields = students[0].slice(1);

        fields.forEach((field) => {
          const fieldIndex = students[0].indexOf(field);
          const studentsInField = students.slice(1).map((student) => student[fieldIndex].trim())
            .filter(Boolean);
          console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
        });

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
