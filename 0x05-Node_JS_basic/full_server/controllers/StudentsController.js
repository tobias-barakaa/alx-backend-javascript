const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = '../database.csv';
      const studentsData = await readDatabase(databasePath);

      res.status(200).send(this.formatStudentsResponse(studentsData));
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static formatStudentsResponse(studentsData) {
    const formattedResponse = ['This is the list of our students'];

    const sortedFields = Object.keys(studentsData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

    for (const field of sortedFields) {
      const studentsInField = studentsData[field];
      const formattedList = studentsInField.join(', ');

      formattedResponse.push(`Number of students in ${field}: ${studentsInField.length}. List: ${formattedList}`);
    }

    return formattedResponse.join('\n');
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = '../database.csv';
    readDatabase(databasePath)
      .then((studentsData) => {
        const studentsInMajor = studentsData[major];
        const formattedList = studentsInMajor.join(', ');

        res.status(200).send(`List: ${formattedList}`);
      })
      .catch((error) => {
        res.status(500).send(`Cannot load the database: ${error.message}`);
      });
  }
}

module.exports = StudentsController;
