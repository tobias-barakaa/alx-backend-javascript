const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

input.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  // Do not close the interface here
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
  // Close the interface here, after handling all input
  input.close();
});
