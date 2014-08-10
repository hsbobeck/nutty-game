var nuts = {

	// Variables
	nbrNuts: 0,
	nbrNutsPerSecond: 1,

	// Functions
    onload: function() {
        nuts.setNbrNuts(0); // We first have 0 nuts
    },

	setNbrNuts: function(value) {
		this.nbrNuts = value;
		htmlInteraction.setInnerHtml("nuts", "You have " + this.nbrNuts + " nuts!");
	}

};