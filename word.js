// require your letter objects
var letter = require('Letter');

var Word = function(wrd){
	this.target = wrd;
	this.letters = [];
	this.found = false;


	this.getLets = function() {
		for (var i=0; i < this.target.length; i++) {
			this.letters.push( new letter(this.target[i]));
		}
	};
	
	this.didWeFindTheWord = function() {
		this.found = this.letters.every(function(currLetter) {
			return currLetter.appear;
		});
		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		for (var i = 0; i < this.letters.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = guessLetter;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};

	this.wordRender = function() {
		var str = '';
		for (var i=0; i < this.letters.length; i++){
			str += this.letters[i].letterRender();
		}
		return str;
	};
}

exports.Word = Word;