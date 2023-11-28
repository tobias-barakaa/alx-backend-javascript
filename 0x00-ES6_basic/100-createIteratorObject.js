export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const departmentName in employeesList) {
    allEmployees[departmentName] = employeesList[departmentName];
  }

  const getNumberOfDepartments = (employees) => {
    return Object.keys(employees).length;
  };

  return {
    allEmployees,
    getNumberOfDepartments: getNumberOfDepartments.bind(null, allEmployees),
  };
}
