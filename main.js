var canvas = new fabric.canvas("mycanvas");

player_x = 600;
player_y = 450;
player_height= 40;
player_width= 30;
player_object= "empty";
block_image="empty";

function player_update(){

    fabric.Image.fromURL("player.png", function(img){
    player_object = img;

    player_object.ScaleToWidth(140);
    player_object.scaleToHeight(160);
    player_object.set({
    top:player_y,
    left:player_x
    });

    canvas.add(player_object)

    });


}


function block_update(get_image){

    fabric.Image.fromURL(get_image, function(img){
    block_object = img;

    block_object.ScaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x
    });

    canvas.add(block_object)

    });


}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){
















if(keyPressed == '38')
{
  up();
  console.log("up");
}

if(keyPressed == '40')
{
  down();
  console.log("down");
}

if(keyPressed == '39')
{
  right();
  console.log("right");
}

if(keyPressed == '37')
{
  left();
  console.log("left");
}

if(keyPressed == '66')
{
  new_image("spiderman_body.png");
  console.log("b");
}

if(keyPressed == '70')
{
  new_image("ironman_face");
  console.log("f");
}

if(keyPressed == '82')
{
  new_image("thor_right_hand.png");
  console.log("r");
}

if(keyPressed == '76')
{
  new_image("ironman_legs.png");
  console.log("l")
}

if(keyPressed == '72')
{
  new_image("captain_america_left_hand.png");
  console.log("h");
}


}



function up()
{
if(ball_y >= 0);
{
player_y= player_y - 10;
console.log("upressed",player_y,player_x);
canvas.remove(player_object);
player_update();
}
}

function down()
{
if(ball_y <= 800);
{
player_y= player_y + 10;
console.log("downpressed",player_y,player_x);
canvas.remove(player_object);
player_update();
}
}

function Left()
{
if(ball_x >= 0);
{
player_x= player_x - 10;
console.log("leftpressed",player_y,player_x);
canvas.remove(player_object);
player_update();
}
}

function right()
{
if(ball_x <= 800);
{
player_x= player_x + 10;
console.log("rightpressed",player_y,player_x);
canvas.remove(player_object);
player_update();
}
}
