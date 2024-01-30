function createInt8TypedArray(length, position, value) {
  if (position < 0 || position > length) {
    throw new Error('Position is outside the range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);

  int8View[position] = value;

  return buffer;
}

module.exports = createInt8TypedArray;
