var lottery = {

	// Variables
	nbrOwned: 0,
	priceForOne: 100,

	// Functions
	setNbrOwned: function(value) {
		this.nbrOwned = value;
		if(this.nbrOwned != 1) {
			htmlInteraction.setInnerHtml("tickets", "You have " + this.nbrOwned + " scratch tickets!");
		} else {
			htmlInteraction.setInnerHtml("tickets", "You have " + this.nbrOwned + " scratch ticket!");
		}
		
	},

	buyTicket: function() {
		if(peanuts.nbrOwned >= this.priceForOne) {
			this.setNbrOwned(this.nbrOwned + 1);
			peanuts.setNbrOwned(peanuts.nbrOwned - this.priceForOne);
			htmlInteraction.setElementVisibility("tickets", true);
		}
	},

};