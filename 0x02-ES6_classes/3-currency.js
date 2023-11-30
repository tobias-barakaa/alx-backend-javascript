class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newValue) {
    this._code = newValue;
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    this._name = newValue;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
export default Currency;
