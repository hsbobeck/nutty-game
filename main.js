var main = {
	// Functions
	onload: function() {
		nuts.onload();

		window.setInterval(this.secInterval.bind(this), 1000);
		window.setInterval(this.tenthSecInterval.bind(this), 100);
	},

	tenthSecInterval: function() {

	},

	secInterval: function() {
		// Nuts
		nuts.setNbrOwned(nuts.nbrOwned + nuts.nbrNutsPerSecond);
	}

}


// attempting to fix load problems
window.onload = function() {
	main.onload()
}