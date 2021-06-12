var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var array=[]
var car1, car2, car3, car4, car5, car=[]

var start_time

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  

}

function preload(){
  carimage1=loadImage("images/car1.png")
  carimage2=loadImage("images/car2.png")
  carimage3=loadImage("images/car3.png")
  carimage4=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
  ground=loadImage("images/ground.png")
}
function draw(){
  background("white")

  if(playerCount==5){
    game.update(1)
    game.begingame()
  }
}
