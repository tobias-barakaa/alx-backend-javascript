export default function iterateThroughObject(reportWithIterator) {
  return Array.from(reportWithIterator).join(' | ');
}
