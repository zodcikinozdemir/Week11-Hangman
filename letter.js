var Letter = function(let) {
	this.character = let;
	this.appear = false;
	this.letterRender = function() {
		return !(this.appear) ? "_" : this.character;
	};
};

exports.Letter = Letter;
