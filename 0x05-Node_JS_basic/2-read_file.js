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

    // Function to count distinct values in a specific field
    const countDistinctValues = (fieldIndex, fieldName) => {
      const distinctValues = new Set(students.slice(1).map((student) => student[fieldIndex]
        .trim()));
      const distinctCount = distinctValues.size;
      const distinctList = [...distinctValues].join(', ');
      console.log(`Number of students in ${fieldName}: ${distinctCount}. List: ${distinctList}`);
    };

    // Count distinct values in each field
    countDistinctValues(1, 'lastname');
    countDistinctValues(2, 'age');
    countDistinctValues(3, 'field');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = countStudents;
