var peanuts = {

	// Variables
	nbrOwned: 0,
	priceForOne: 10,

	// Functions
	setNbrOwned: function(value) {
		this.nbrOwned = value;
		if(this.nbrOwned != 1) {
			htmlInteraction.setInnerHtml("peanuts", "You have " + this.nbrOwned + " peanuts!");
		} else {
			htmlInteraction.setInnerHtml("peanuts", "You have " + this.nbrOwned + " peanut!");
		}
		
	},

	buy1: function() {
		if(nuts.nbrOwned >= this.priceForOne) {
			this.setNbrOwned(this.nbrOwned + 1)
			nuts.setNbrOwned(nuts.nbrOwned - 10)
			htmlInteraction.setElementVisibility("peanuts", true)
		}
	},

	buy10: function() {
		if(nuts.nbrOwned >= this.priceForOne*10) {
			this.setNbrOwned(this.nbrOwned + 10)
			nuts.setNbrOwned(nuts.nbrOwned - 100)
			htmlInteraction.setElementVisibility("peanuts", true)
		}
	},

};