interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentsList: Student[] = [
    { firstName: 'John', lastName: 'Doe', age: 25, location: 'New York' },
    { firstName: 'Jane', lastName: 'Smith', age: 22, location: 'San Francisco' },
  ];
  
  function renderTable(students: Student[]): void {
    const table = document.createElement('table');
  
    students.forEach((student) => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
  
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    document.body.appendChild(table);
  }
  
  renderTable(studentsList);
