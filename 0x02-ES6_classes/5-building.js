class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
  if (this.evacuationWarningMessage === undefined) {
    throw new Error('Class extending Building must override evacuationWarningMessage');
 }
}
}

export default Building;
