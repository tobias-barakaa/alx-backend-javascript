export default function appendToEachArrayValue(array, appendString) {
  return array.map(value => appendString + value);
}
