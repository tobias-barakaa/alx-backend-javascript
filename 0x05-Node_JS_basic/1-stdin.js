const readline = require('readline');

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

input.on('line', (name) => {
  console.log(`Your name is: ${name}`);
  // Close the interface if not reading from a pipeline
  if (process.stdin.isTTY) {
    input.close();
  }
});

// Handle the 'close' event to display the closing message when reading from a pipeline
input.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});

// Handle the 'SIGINT' (Ctrl+C) event to exit gracefully
process.on('SIGINT', () => {
  console.log('\nExiting gracefully...');
  // Close the interface and exit the process
  input.close();
  process.exit();
});
