export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}
