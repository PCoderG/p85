var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Give specific height and width to the car image
var car_width = 100;
var car_height = 200;

var background_image = "parkingLot.jpg";
var greencar_image = "car2.png";

//Set initial position for a car image.
var car_x = 400
var car_y = 100

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car_tag= new Image();
	car_tag.onload = uploadgreencar;
	car_tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_tag,car_x,car_y,car_width,car_height);

	
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
	}
function up()
{
	if(car_y >=0){
		car_y = car_y-10;
		uploadBackground();
		uploadgreencar();
		
	}
}

function down()
{
	if(car_y <=400){
		car_y = car_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x >=0){
		car_x = car_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_x <=700){
		car_x = car_x+10;
		uploadBackground();
		uploadgreencar();
	}
}

