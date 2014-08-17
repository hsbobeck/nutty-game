var buttons = {
	
	// functions
	checkPeanutAvailable: function() {
		if(nuts.nbrOwned >=100) {
			htmlInteraction.showButton("buyPeanut10");
			htmlInteraction.enableButton("buyPeanut10");
		} else {
			htmlInteraction.disableButton("buyPeanut10");
		}
		if(nuts.nbrOwned >= 10) {
			htmlInteraction.showButton("buyPeanut");
			htmlInteraction.enableButton("buyPeanut");
		} else {
			htmlInteraction.disableButton("buyPeanut");
		}
	},

};