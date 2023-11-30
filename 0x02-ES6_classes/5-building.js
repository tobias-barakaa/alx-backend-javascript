class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
  if (this.constructor !== Building) {
    throw new Error('Class extending Building must override evacuationWarningMessage');
 }
}
}

export default Building;
