class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error();
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
    if (!(this instanceof Building)) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }
}
export default Building;
