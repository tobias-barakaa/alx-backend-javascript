export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;

  const engineeringEmployees = allEmployees.engineering || [];
  const employeeNames = engineeringEmployees.join(' | ');

  return employeeNames;
}
