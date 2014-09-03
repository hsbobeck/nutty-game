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
		htmlInteraction.setElementVisibility("commonCongrats", false)
		htmlInteraction.setElementVisibility("shinyCongrats", false)
		htmlInteraction.setElementVisibility("goldenCongrats", false)

		if(peanuts.nbrOwned >= this.priceForOne) {
			random = Math.random();
			peanuts.setNbrOwned(peanuts.nbrOwned - this.priceForOne);
			if(random < 0.81) {
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

		commonOutcomes = ['peanuts', 'nuts'];
		uncommonOutcomes = ['peanuts', 'nuts'];
		rareOutcomes = ['peanuts', 'nuts'];

		shuffle(commonOutcomes);
		shuffle(uncommonOutcomes);
		shuffle(rareOutcomes);

		defaultWarning = "Uh oh! Looks like something from the array doesn't have a case in the switch statements.";
		random = Math.random();

		if(random < 0.76) {
			// these are common for this ticket
			switch(commonOutcomes[0]) {
				case 'peanuts':
					randPeanuts = getRandomFromRange(1, 5);
					peanuts.setNbrOwned(peanuts.nbrOwned + randPeanuts);
					htmlInteraction.setInnerHtml("commonCongrats", "You didn't profit, but at least you won " + randPeanuts + " peanuts.")
					break;
				case 'nuts':
					randNuts = getRandomFromRange(10, 51);
					nuts.setNbrOwned(nuts.nbrOwned + randNuts);
					htmlInteraction.setInnerHtml("commonCongrats", "You didn't profit, but at least you won " + randNuts + " nuts.")
					break;
				default:
					console.log(defaultWarning)
					break;
			}
		} else if(random < 0.96) {
			// these are uncommon for this ticket
			switch(uncommonOutcomes[0]) {
				case 'peanuts':
					randPeanuts = getRandomFromRange(6, 10);
					peanuts.setNbrOwned(peanuts.nbrOwned + randPeanuts);
					htmlInteraction.setInnerHtml("commonCongrats", "You didn't profit, but at least you won " + randPeanuts + " peanuts.")
					break;
				case 'nuts':
					randNuts = getRandomFromRange(52, 100);
					nuts.setNbrOwned(nuts.nbrOwned + randNuts);
					htmlInteraction.setInnerHtml("commonCongrats", "You didn't profit, but at least you won " + randNuts + " nuts.")
					break;
				default:
					console.log(defaultWarning)
					break;
			}
		} else {
			// these are rare for this ticket
			switch(rareOutcomes[0]) {
				case 'peanuts':
					randPeanuts = getRandomFromRange(11, 21);
					peanuts.setNbrOwned(peanuts.nbrOwned + randPeanuts);
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You profited and won " + randPeanuts + " peanuts.")
					break;
				case 'nuts':
					randNuts = getRandomFromRange(101, 201);
					nuts.setNbrOwned(nuts.nbrOwned + randNuts);
					htmlInteraction.setInnerHtml("commonCongrats", "Congratulations! You profited and won " + randNuts + " nuts.")
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