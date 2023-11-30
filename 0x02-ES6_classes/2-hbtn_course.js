class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateLength(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents);
  }

  validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
    return this._name;
  }

  validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = length;
    return this._length;
  }

  validateStudents(students) {
    if (
      !Array.isArray(students)
      || !students.every((student) => typeof student === 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = students;
    return this._students;
  }
}

export default HolbertonCourse;
