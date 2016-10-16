var Word = require("./word.js");
var prompt = require('prompt'); 

var game = {
	wordBank: ['lindt', 'dove', 'godiva', 'hersheys', 'ghirardelli', 'mars', 'milkyway', 'toblerone',  'almondjoy', 'reeses', 'snickers', 'kitkat', 'twix'],
	wordsWon : 0,
	guessesRemaining : 10, 
	currentWrd : null, 
	
	startGame : function (wrd){
		this.resetGuessesRemaining();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		console.log(this.currentWrd);
 		this.currentWrd.getLets();
		this.keepPromptingUser();
	}, 
	resetGuessesRemaining : function() {
    	this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		  console.log("You guessed: " + result.guessLetter);
 			var manyGuessed = self.currentWrd.checkIfLetterFound(result.guessLetter);

 			if(manyGuessed ==0) {
 				console.log("\nWRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("\nCORRECT");
 					if(self.currentWrd.didWeFindTheWord()) {
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.keepPromptingUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
		    
		});
	}

};

module.exports = game;