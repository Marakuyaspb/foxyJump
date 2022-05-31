var minute = 0;
var sec = 0;

window.onload = function() {
	setInterval(tick, 1000);
};

function tick() {
	sec++;
	if (sec == 60){
		sec = 0;
		minute++;
	}

	var secondout = sec;
	if(sec < 10){
		secondout = "0" + sec;
	}
	var minuteout = minute;
	if(minute < 10){
		minuteout = "0" + minute;
	}

	var timer = minuteout + ':'+ secondout;
	document.getElementById("timer").innerHTML = timer;
	}
