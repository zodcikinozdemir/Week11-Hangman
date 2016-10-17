var Word = require("./word.js");
var prompt = require('prompt'); 

var game = {
	wordBank: ['lindt', 'dove', 'godiva', 'hersheys', 'ghirardelli', 'mars', 'milkyway', 'toblerone',  'almondjoy', 'reeses', 'snickers', 'kitkat', 'twix'],
	wordsWon : 0,
	guessesRemaining : 10, 
	currentWrd : null, 
	
	startGame : function (wrd) {
		this.resetGuessesRemaining();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLetters();
 		console.log("Word : ["+this.currentWrd.wordRender()+"]");
		this.keepPromptingUser();
	}, 
	resetGuessesRemaining : function() {
    	this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    var manyGuessed = self.currentWrd.checkIfLetterFound(result.guessLetter);
            if(manyGuessed ==0) {
 				console.log("WRONG\n");
 				self.guessesRemaining--;
 			} else {
 				console.log("CORRECT\n");
 					if(self.currentWrd.didWeFindTheWord()) {
 						console.log("\tYou guessed the word : " 
 							+ self.currentWrd.wordRender());
 						console.log("\t-------------------------------");
 						return;
 					}
 			}
 			console.log("Word : ["+self.currentWrd.wordRender()+"]");
 			
 			console.log("\nGuesses remaining: " + self.guessesRemaining);
 			console.log("----------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.keepPromptingUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("[Game over] Correct Word : ", 
 							self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
		    
		});
	}

};

module.exports = game;