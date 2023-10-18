// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY



// Créer une connexion WebSocket
var socket = new WebSocket('ws://192.168.8.200:1880/humidity');

// Écouter les messages entrants
socket.onmessage = function(event) {
  console.log('Message du serveur : ', event.data);
  
  // Convertir la chaîne en nombre et l'assigner à min_dist
  min_dist = Number(event.data);
};
 
var tree;
var max_dist = 100;
var min_dist = 10;



function setup() {
  createCanvas(windowWidth, windowHeight);
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
