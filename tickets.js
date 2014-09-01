var tickets = {

	// Variables
	nbrOwnedCommon: 0,
	nbrOwnedShiny: 0,
	nbrOwnedGolden: 0,
	priceForOne: 10,


	// Functions
	setNbrOwnedCommon: function(value) {
		this.nbrOwnedCommon = value;
		buttons.checkScratchCommonAvailable();
		if(this.nbrOwnedCommon != 1) {
			htmlInteraction.setInnerHtml("ticketsCommon", "You have " + this.nbrOwnedCommon + " common scratch tickets!");
		} else {
			htmlInteraction.setInnerHtml("ticketsCommon", "You have " + this.nbrOwnedCommon + " common scratch ticket!");
		}
		
	},

	setNbrOwnedShiny: function(value) {
		this.nbrOwnedShiny = value;
		buttons.checkScratchShinyAvailable();
		if(this.nbrOwnedShiny != 1) {
			htmlInteraction.setInnerHtml("ticketsShiny", "You have " + this.nbrOwnedShiny + " shiny scratch tickets!");
		} else {
			htmlInteraction.setInnerHtml("ticketsShiny", "You have " + this.nbrOwnedShiny + " shiny scratch ticket!");
		}
		
	},

	setNbrOwnedGolden: function(value) {
		this.nbrOwnedGolden = value;
		buttons.checkScratchGoldenAvailable();
		if(this.nbrOwnedGolden != 1) {
			htmlInteraction.setInnerHtml("ticketsGolden", "You have " + this.nbrOwnedGolden + " golden scratch tickets!");
		} else {
			htmlInteraction.setInnerHtml("ticketsGolden", "You have " + this.nbrOwnedGolden + " golden scratch ticket!");
		}
		
	},

	buyTicket: function() {
		if(peanuts.nbrOwned >= this.priceForOne) {
			random = Math.random();
			peanuts.setNbrOwned(peanuts.nbrOwned - this.priceForOne);
			if(random < 0.76) {
				this.setNbrOwnedCommon(this.nbrOwnedCommon + 1);
				htmlInteraction.setElementVisibility("ticketsCommon", true);
			} else if(random < 0.96) {
				this.setNbrOwnedShiny(this.nbrOwnedShiny + 1);
				htmlInteraction.setElementVisibility("ticketsShiny", true);
			} else {
				this.setNbrOwnedGolden(this.nbrOwnedGolden + 1);
				htmlInteraction.setElementVisibility("ticketsGolden", true);
			}
		}
	},

	scratchCommon: function() {
		this.setNbrOwnedCommon(this.nbrOwnedCommon - 1);
		htmlInteraction.setElementVisibility("commonCongrats", true)
		htmlInteraction.setElementVisibility("shinyCongrats", false)
		htmlInteraction.setElementVisibility("goldenCongrats", false)
	},

	scratchShiny: function() {
		this.setNbrOwnedShiny(this.nbrOwnedShiny - 1);
		htmlInteraction.setElementVisibility("shinyCongrats", true)
		htmlInteraction.setElementVisibility("commonCongrats", false)
		htmlInteraction.setElementVisibility("goldenCongrats", false)
	},

	scratchGolden: function() {
		this.setNbrOwnedGolden(this.nbrOwnedGolden - 1);
		htmlInteraction.setElementVisibility("goldenCongrats", true)
		htmlInteraction.setElementVisibility("commonCongrats", false)
		htmlInteraction.setElementVisibility("shinyCongrats", false)
	},

};