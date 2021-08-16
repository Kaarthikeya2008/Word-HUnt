
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bg, form, player
function preload(){
  bg=loadImage("hunt.jpg")
}

function setup()
{
  createCanvas(displayWidth-40, displayHeight-180);
  game=new Game()
  game.start()
}

function draw() 
{
  background(bg);
 

}

