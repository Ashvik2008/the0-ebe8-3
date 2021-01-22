//gameState
var gameState = 0;

function preload()
{
  //loading images
  logo_Img = loadImage("images/APP_LOGO.png");

 
}

function setup()
{
  //creating the canvas
  createCanvas(1000,2000);

  //creating the logo
  logo = createSprite(1000/2,2000/2,20,20);
  logo.addImage(logo_Img);
  logo.scale = 0.6;


}

function draw()
{
  //background color as black
  background(0);

  //to make logo dissapear when game State changes to 1
  if(frameCount % 10 === 0 && gameState === 0)
  {
     gameState = 1;
  }

  if(gameState === 1)
  {
  fill(255);
  textSize(2000/60);
  text('WHICH SONG LANGUAGE DO YOU LIKE',160,200);
  }

  //displaying the logo when gameState is 0
  if(gameState !== 0)
  {
   logo.hide();
  }


  //drawing the sprites
  drawSprites();
}
