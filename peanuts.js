var peanuts = {

	// Variables
	nbrOwned: 0,
	priceForOne: 10,

	// Functions
	setNbrOwned: function(value) {
		this.nbrOwned = value;
		htmlInteraction.setInnerHtml("peanuts", "You have " + this.nbrOwned + " peanuts!");
	},

	buy1: function() {
		if(nuts.nbrOwned >= this.priceForOne) {
			this.setNbrOwned(this.nbrOwned + 1)
			nuts.setNbrOwned(nuts.nbrOwned - 10)
		}
	},

};