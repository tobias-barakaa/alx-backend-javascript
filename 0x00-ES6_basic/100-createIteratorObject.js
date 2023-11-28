export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const employeesInDepartment = allEmployees[currentDepartment];

        if (currentEmployeeIndex < employeesInDepartment.length) {
          const currentEmployee = employeesInDepartment[currentEmployeeIndex];
          currentEmployeeIndex++;
          return { value: currentEmployee, done: false };
        } else {
          // Move to the next department
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
      }

      // No more employees to iterate
      return { done: true };
    },
  };
}
