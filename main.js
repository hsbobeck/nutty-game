nutAmount = 0;

function increment() {
	nutAmount += 1;
	document.getElementById("nutAmount").innerHTML = nutAmount;
}

setInterval(increment, 1000)
