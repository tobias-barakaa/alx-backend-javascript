export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  return employeeNames.join(' | ');
}
