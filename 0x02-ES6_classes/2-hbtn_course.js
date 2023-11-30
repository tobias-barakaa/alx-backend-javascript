class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return [...this._students];
  }

  set name(newValue) {
    if (typeof newValue === 'string') {
      this._name = newValue;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(newValue) {
    if (typeof newValue === "number") {
      this._length = newValue;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  addStudent(student) {
    this._students.push(student);
  }

  removeStudent(student) {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }
}
export default HolbertonCourse;
