//Create variables here
var dog,dogImg,happydog,bgImg
var database;
var foods,foodStock
function preload()
{
  dogImg = loadImage("D2.png")
	//load images here
  happydog = loadImage("D.png")
  bgImg = loadImage("Wow.jpeg")

}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,370)
  dog.addImage(dogImg)
  dog.scale = 0.3

  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value",readFood);


}


function draw() {  
background(bgImg);
if(keyWentDown(UP_ARROW)){

  writeStock(foods);

  dog.addImage(happydog)
  dog.y = 330
}

  drawSprites();
  //add styles here
  fill("red")
  textSize(20)
  text("PRESS UP ARROW KEY TO FEED",100,100) 
  text("Food : " + foods,100,140)
  fill("white")
  text("Note : You Have to Take Care OF Your Pet",50,450)

}
function readFood(data){
foods = data.val()



}

function writeStock(x){
if(x<=0){

x = 0

}else{
  x = x-1
}
if(x === 0){
  fill("black")
  textSize(20)
    text("Sorry Stock Finished", 150,250).setLifeTime()
    
    }

 //x = x-1
database.ref("/").update({

Food:x

})

}



