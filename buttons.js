var buttons = {
	
	// functions
	checkPeanutAvailable: function() {
		if(nuts.nbrOwned >= 10) {
			htmlInteraction.showButton("buyPeanut");
			htmlInteraction.enableButton("buyPeanut");
		} else {
			htmlInteraction.disableButton("buyPeanut");
		}
	},

};