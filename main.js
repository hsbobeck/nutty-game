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
/*	This segment makes the peanut button appear for the first time
/*-----------------------------------------------------------------------------------*/
document.getElementById("btnBuyPeanut").style.display='none';
buttonCheckFirst_done = false
function buttonCheckFirst() {
	if(buttonCheckFirst_done == false && nutAmount >= 10) {
		document.getElementById("btnBuyPeanut").style.display='block';
		buttonCheckFirst_done = true;
	}
}
// run buttonCheckFirst every second
setInterval(buttonCheckFirst, 1000)

/*-----------------------------------------------------------------------------------*/
/*	This segment makes the peanut button disabled when you have less than ten nuts
/*-----------------------------------------------------------------------------------*/
document.getElementById("btnBuyPeanut").disabled=true;
function buttonCheck() {
	if(nutAmount >= 10) {
		document.getElementById("btnBuyPeanut").disabled=false;
	}
}
setInterval(buttonCheck, 1000)


peanutAmount = 0;
function buyPeanut() {
	nutAmount -= 10;
	peanutAmount += 1;
	document.getElementById("peanutAmount").innerHTML = peanutAmount;
}