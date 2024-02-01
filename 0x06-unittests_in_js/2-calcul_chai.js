// 2-calcul_chai.js

function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    switch (type) {
      case 'SUM':
        return roundedA + roundedB;
  
      case 'SUBTRACT':
        return roundedA - roundedB;
  
      case 'DIVIDE':
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
  
      default:
        throw new Error('Invalid type. Supported types are: SUM, SUBTRACT, DIVIDE');
    }
  }
  
  module.exports = calculateNumber;
  