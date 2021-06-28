const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var time
var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    var b=createCanvas(900,900)
    if (backgroundImg) {
        background(backgroundImg);
        noStroke()
        textSize(45)
        fill("#00ffff")
        text(time,200,200)
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json()
var daytime = responseJSON.datetime
    //change the data in JSON format
 time = daytime.slice(11,13);
    // write code slice the datetime

if(time <=6 && time>=4){
    bg="sunrise1.png"

}
if(time >=6 & time <=8){
    bg="sunrise2.png"

}
if(time >=8 & time <=10){
    bg="sunrise3.png"

}
if(time >=10 & time <=12){
    bg="sunrise4.png"

}
if(time >=12 & time <=14){

    bg="sunrise5.png"

}
if(time >= 14 & time <=16){
    bg="sunrise6.png"

}
if(time >=16 & time <=18){
    bg="sunset7.png"

}
if(time >=18 & time <=20 ){
    bg="sunset8.png"

}
if(time >=20 & time <=22){
    bg="sunset9.png"

}
if(time >=22 & time <=0){
    bg="sunset10.png"

}
if(time >=0 & time <=2){
    bg="sunset11.png"

}
if(time >=2 & time <=4){
    bg="sunset12.png"

}


    // add conditions to change the background images from sunrise to sunset
backgroundImg=loadImage(bg)

    //load the image in backgroundImg variable here

}
