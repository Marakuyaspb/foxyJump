var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
  
const canvas_width = canvas.width = 400;
const canvas_heigh = canvas.height = 200;
 
// initialisation
const xch = new Image();
xch.src = "the_foxy_all.png";
const xch2 = new Image();
xch2.src = "the_foxy_all.png";
const foxy = new Image();
foxy.src = "the_foxy_all.png";
const bat = new Image();
bat.src = "the_foxy_all.png";

const foxyHeight = 130;
const foxyWidth = 71;

const xchWidth = 20;
const xchHeight = 20;
const xch2Width = 20;
const xch2Height = 20;

const batWidth = 56;
const batHeight = 26;

var xchMove = Math.floor(Math.random() * (600 - 400) ) + 400;
var xch2Move = Math.floor(Math.random() * (4000 - 2000) ) + 2000;
var batMove = Math.floor(Math.random() * (3000 - 1000) ) + 1000;
 
console.log(xchMove);
console.log(batMove);

let frameXchX = 0;

let frameXch2X = 0;

let framefoxyX = 0;
let framefoxyY = 0;

let framebatX = 0;
let framebatY = 0;

// speed
let currentLoopIndex = 0;
let frameCount = 0;

// about jumping
document.addEventListener('mousedown', function frameDown (){
	framefoxyY = 130;
});
document.addEventListener('mouseup',function frameUp (){
	framefoxyY = 0;
});

// score
var score = 0;

// listen events for gameover
var doYouClick;

document.addEventListener('mousedown', function mouseDown (){
	return doYouClick = true;
});
document.addEventListener('mouseup',function mouseUp (){
	return doYouClick = false;
});


function startGame(){
	let startDiv = document.getElementById('start');
	let gameAll = document.getElementById('all');
	let gameCanvas = document.getElementById('canvas');
	let gameContainer = document.getElementById('container');

	startDiv.style.display = 'none';
	gameAll.style.display = 'block';
	gameCanvas.style.display = 'block';
	gameContainer.style.display = 'block';

	animate();
}


// Draw all animations
function animate (frameDown, frameUp, mouseUp, mouseDown) {
// SPEED
	frameCount++;
	if (frameCount < 5) {
		window.requestAnimationFrame(animate);
		return;
	}
	frameCount = 0;

	ctx.clearRect(0, 0, canvas_width, canvas_heigh);

// XCH
	ctx.drawImage(xch,frameXchX * xchWidth,260,xchWidth,xchHeight,xchMove,170,xchWidth,xchHeight);
// rolling
	if (frameXchX < 11) frameXchX++;
	else frameXchX = 0;

// linear moving XCH
	if (xchMove == 0) {
			clearInterval(xchMove);
	} else {
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
		xchMove--;
	} 
	if (xchMove <= 0) {
		xchMove = Math.floor(Math.random() * (600 - 400) ) + 600;
//score XCH
		score += 13;
		document.getElementById("score").innerHTML = score;
	}



 //SECOND XCH
	ctx.drawImage(xch2,frameXch2X * xch2Width,260,xch2Width,xch2Height,xch2Move,170,xch2Width,xch2Height);
// rolling second XCH
	if (frameXch2X < 11) frameXch2X++;
	else frameXch2X = 0;

// linear moving second XCH
	if (xch2Move == 0) {
			clearInterval(xch2Move);
	} else {
		xch2Move--;
		xch2Move--;
		xch2Move--;
		xch2Move--;
		xch2Move--;
		xch2Move--;
		xch2Move--;
	} 
	if (xch2Move <= 0) {
		xch2Move = Math.floor(Math.random() * (4000 - 2000) ) + 2000;
//score second XCH
		score += 13;
		document.getElementById("score").innerHTML = score;
	}



// BAT
	ctx.drawImage(bat,framebatX * batWidth,280,batWidth,batHeight,batMove,70,batWidth,batHeight);
	if (framebatX < 4) framebatX++;
	else framebatX = 0;

// linear moving BAT
	if (batMove == 0) {
		clearInterval(batMove);
	} else {
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
		batMove--;
	} 
	if (batMove <= 0) {
		batMove = Math.floor(Math.random() * (3000 - 1000) ) + 1000;
		// score BAT
	score += 13;
		document.getElementById("score").innerHTML = score;
	}


// GAME OVER

// XCH cause
	if ((doYouClick == false) & (xchMove <= 90)) {
		var minute = 0;
		var sec = 0;
		location.reload();
	} 	

	if ((doYouClick == false) & (xch2Move <= 90)) {
		var minute = 0;
		var sec = 0;
		location.reload();
	} 	


//  BAT cause
	if ((doYouClick == true) & (batMove <= 90)) {
		location.reload();
	} 

// FOX jumping
	ctx.drawImage(foxy, framefoxyX * foxyWidth, framefoxyY, foxyWidth, foxyHeight, 20, 60, foxyWidth, foxyHeight);
		if (framefoxyX < 7) framefoxyX++;
		else framefoxyX = 0;

// LEVELS++
	var level = 1;
	function levelUp(tick){

		if (sec > 20){ 
			level++;
			document.getElementById("level").innerHTML = level;
		} 
		if (sec > 40) {
			level++;
			document.getElementById("level").innerHTML = level;
		} 
		if (minute > 1) {
				level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 2) {
				level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 4) {
		level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 6) {
		level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 9) {
		level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 12) {
		level++;
			document.getElementById("level").innerHTML = level;
		}
		if (minute > 17) {
		level++;
			document.getElementById("level").innerHTML = level;
		}
	}
	levelUp();

	requestAnimationFrame(animate);
	return;
}