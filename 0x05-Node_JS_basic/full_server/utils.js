import readFile from 'fs';

function organizeStudentsByField(studentsInfo) {
  const fields = {};
  studentsInfo.forEach((student, index) => {
    if (index > 0) {
      const field = student[3];
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    }
  });
  return fields;
}

function parseCSV(data) {
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  const students = lines.map((line) => line.split(','));
  return students;
}
async function readDatabase(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const studentsInfo = parseCSV(fileContent);
    return organizeStudentsByField(studentsInfo);
  } catch (error) {
    throw new Error(`Error reading the database file: ${error.message}`);
  }
}

export default readDatabase;
module.exports = readDatabase;
