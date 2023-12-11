// Créer une connexion WebSocket
var ws = new WebSocket("ws://zvevqx.com:8018/humidity");

var wsValue = 0;

ws.onmessage = function(event) {
	wsValue = parseInt(event.data);
	output.innerHTML = event.data;
	console.log(wsValue);
};

var tree;
var max_dist = 100;
var min_dist = 10;

function setup() {
	var cnv = createCanvas(1000, 1000);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	tree = new Tree();
}

function draw() {
	background(0, 0);
	tree.show();
	tree.grow();
}

setTimeout(function(){
	location.reload();
}, 4000);
