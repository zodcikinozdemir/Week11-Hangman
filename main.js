var game = require('./game.js');
var prompt = require('prompt');

console.log("Welcome to Chocolate Hangman!");
console.log("Guess a letter of the name of a chocolate bar");
console.log("-----------------------------");
prompt.start();

game.startGame();
