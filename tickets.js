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

		commonOutcomes = ['2peanuts', '1peanut', '25nuts', '10nuts'];
		uncommonOutcomes = ['5peanuts', '8peanuts', '65nuts', '80nuts'];
		rareOutcomes = ['10peanuts', '15peanuts', '100nuts', '165nuts'];

		shuffle(commonOutcomes);
		shuffle(uncommonOutcomes);
		shuffle(rareOutcomes);

		defaultWarning = "Uh oh! Looks like something from the array doesn't have a case in the switch statements.";
		random = Math.random();

		if(random < 0.76) {
			// these are common for this ticket
			switch(commonOutcomes[0]) {
				case '2peanuts':
					peanuts.setNbrOwned(peanuts.nbrOwned + 2)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 2 peanuts.")
					break;
				case '1peanut':
					peanuts.setNbrOwned(peanuts.nbrOwned + 1)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won a peanut.")
					break;
				case '25nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 25)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 25 nuts.")
					break;
				case '10nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 10)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 10 nuts.")
					break;
				default:
					console.log(defaultWarning)
					break;
			}
		} else if(random < 0.96) {
			// these are uncommon for this ticket
			switch(uncommonOutcomes[0]) {
				case '5peanuts':
					peanuts.setNbrOwned(peanuts.nbrOwned + 5)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 5 peanuts.")
					break;
				case '8peanuts':
					peanuts.setNbrOwned(peanuts.nbrOwned + 8)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 8 peanuts.")
					break;
				case '65nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 65)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 65 nuts.")
					break;
				case '80nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 80)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 80 nuts.")
					break;
				default:
					console.log(defaultWarning)
					break;
			}
		} else {
			// these are rare for this ticket
			switch(rareOutcomes[0]) {
				case '10peanuts':
					peanuts.setNbrOwned(peanuts.nbrOwned + 10)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 10 peanuts.")
					break;
				case '15peanuts':
					peanuts.setNbrOwned(peanuts.nbrOwned + 15)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 15 peanuts.")
					break;
				case '100nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 100)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 100 nuts.")
					break;
				case '165nuts':
					nuts.setNbrOwned(nuts.nbrOwned + 165)
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You won 165 nuts.")
					break;
				default:
					console.log(defaultWarning)
					break;
			}
		}
	},

	scratchShiny: function() {
		this.setNbrOwnedShiny(this.nbrOwnedShiny - 1);
		htmlInteraction.setElementVisibility("shinyCongrats", true)
		htmlInteraction.setElementVisibility("commonCongrats", false)
		htmlInteraction.setElementVisibility("goldenCongrats", false)

		random = Math.random();
		if(random < 0.76) {
			// these are common for this ticket

		} else if(random < 0.96) {
			// these are uncommon for this ticket

		} else {
			// these are rare for this ticket

		}
	},

	scratchGolden: function() {
		this.setNbrOwnedGolden(this.nbrOwnedGolden - 1);
		htmlInteraction.setElementVisibility("goldenCongrats", true)
		htmlInteraction.setElementVisibility("commonCongrats", false)
		htmlInteraction.setElementVisibility("shinyCongrats", false)

		random = Math.random();
		if(random < 0.76) {
			// these are common for this ticket

		} else if(random < 0.96) {
			// these are uncommon for this ticket

		} else {
			// these are rare for this ticket

		}
	},

};