/*-----------------------------------------------------------------------------------*/
/*  This segment gives 1 nut every second
/*-----------------------------------------------------------------------------------*/
nutAmount = 0;
// Adds 1 to the amount of nuts and updates the count displayed on screen every time it runs
function increment() {
	nutAmount += 1;
	document.getElementById("nutAmount").innerHTML = nutAmount;
}

// run increment every second
setInterval(increment, 1000)
/*-----------------------------------------------------------------------------------*/