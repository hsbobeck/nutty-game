var main = {
	// Functions
	onload: function() {
		nuts.onload();

		window.setInterval(this.secInterval.bind(this), 1000);
	},

	secInterval: function() {
		// Nuts
		nuts.setNbrNuts(nuts.nbrNuts + nuts.nbrNutsPerSecond);
	}

}
window.onload = function() {
	main.onload()
}