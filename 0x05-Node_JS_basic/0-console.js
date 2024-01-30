#!/usr/bin/env node
const message = process.argv[2];
function displayMessage() {
  console.log(message);
}

module.exports = displayMessage;