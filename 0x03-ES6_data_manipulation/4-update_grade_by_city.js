export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}
