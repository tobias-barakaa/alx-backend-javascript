export default function iterateThroughObject(reportWithIterator) {
  const { allEmployees } = reportWithIterator;

  const allNames = Object.values(allEmployees) // Extract all arrays of names
    .flatMap(names => names) // Flatten arrays into a single array
    .join(' | '); // Join names with ' | ' separator

  return allNames;
}
