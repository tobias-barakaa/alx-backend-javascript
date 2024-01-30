// 1-stdin.js

const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');
const len = process.argv.length;
if (len <= 2) {
  input.on('line', (name) => {
    console.log(`Your name is: ${name}`);
    input.close();
  });
} else if (len > 2) {
  console.log('This important software is now closing');
  input.close();
} else {
  input.close();
}
