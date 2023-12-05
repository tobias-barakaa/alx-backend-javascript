// export default function getListStudents(callback) {
//   const students = [
//     { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//     { id: 2, firstName: 'James', location: 'Columbia' },
//     { id: 5, firstName: 'Serena', location: 'San Francisco' },
//   ];
//   callback(students);
// }

// 0-get_list_students.js

const getListStudents = (callback) => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  callback(students);
};
export default getListStudents;
