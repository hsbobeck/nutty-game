var nuts = {

	// Variables
	nbrOwned: 0,
	nbrNutsPerSecond: 1,

	// Functions
    onload: function() {
        nuts.setNbrOwned(0); // We first have 0 nuts
    },

	setNbrOwned: function(value) {
		this.nbrOwned = value;
		htmlInteraction.setInnerHtml("nuts", "You have " + this.nbrOwned + " nuts!");
	}

};