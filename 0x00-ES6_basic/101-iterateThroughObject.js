export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const employee of reportWithIterator) {
    employeeNames += `${employee} | `;
  }

  return employeeNames.trimEnd();
}
