class HolbertonCourse {
  constructor(students, name, length) {
    this._students = students;
    this._name = name;
    this._length = length;
  }

  get students() {
    return this._students;
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (typeof newValue === "string") {
      this._name = newValue;
    } else {
      throw new TypeError("Name must be a string");
    }
  }

  get length() {
    return this._length;
  }

  set length(newValue) {
    if (typeof newValue === "number") {
      this._length = newValue;
    } else {
      throw new TypeError("Length must be a number");
    }
  }
}
export default HolbertonCourse;
