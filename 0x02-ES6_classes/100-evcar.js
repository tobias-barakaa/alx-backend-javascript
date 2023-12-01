import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }
  cloneCar() {
    const newCar = new Car(this._brand, this._motor, this._color);
    return newCar;
  }
}

export default EVCar;
