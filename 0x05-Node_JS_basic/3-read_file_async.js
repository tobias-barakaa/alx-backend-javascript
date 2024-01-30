const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        if (error.code === 'ENOENT') {
          reject(new Error('Cannot load the database'));
        } else {
          reject(error); // Rethrow other errors
        }
      } else {
        const rows = data.split('\n').filter((row) => row.trim()); // Remove empty lines
        const students = rows.map((row) => row.split(','));

        const studentCount = students.length;
        const fields = {};

        students.forEach((student) => {
          const field = student[3];
          fields[field] = fields[field] || { count: 0, names: [] };
          fields[field].count += 1;
          fields[field].names.push(student[0]);
        });

        console.log(`Number of students: ${studentCount}`);

        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const { count, names } = fields[field];
            console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
