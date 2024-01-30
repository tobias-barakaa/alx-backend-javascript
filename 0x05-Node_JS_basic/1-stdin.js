// 1-stdin.js

const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

input.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  input.close();
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  input.close();
});
