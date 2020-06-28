// Notificatie wake up tussen 07.00 uur en 08.00 uur
var wakeup = document.getElementById("n1");
if (time >= 7 && time < 8){
	var wakeup = document.getElementById("n1");
} else{
	wakeup.classList.remove("notification1");
	document.getElementById("p1").innerHTML = " ";
}
//notificatie goodnight tussen 22.00 uur en 06.00 uur
var goodnight = document.getElementById("n2");
if (time >= 0 && time < 6){
	var goodnight = document.getElementById("n2");
} else{
	goodnight.classList.remove("notification2");
	document.getElementById("p2").innerHTML = " ";
}

