export default function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  const result = startString === '' ? Array.from(set) : filteredValues;

  return result.join('-');
}
