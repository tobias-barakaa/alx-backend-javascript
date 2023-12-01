const cloneSymbol = Symbol('clone');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneSymbol]() {
    const clonedCar = new this.constructor();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      clonedCar[prop] = this[prop];
    });
    return clonedCar;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}

export default Car;
