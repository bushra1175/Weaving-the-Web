/*
The case of the Python Syndicate
Stage 4

Officer: 3357927
CaseNum: 301-3-68218634-3357927

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bonesKarpinskiImg;
var rockyKrayImg;
var pawelKarpinskiImg;
var cecilKarpinskiImg;
var countessHamiltonImg;
var linaLovelaceImg;

var countessHamiltonObj;


//declare your new objects below
var bonesKarpinskiObj;
var rockyKrayObj;
var pawelKarpinskiObj;
var cecilKarpinskiObj;
var linaLovelaceObj;

/*var bonesKarpinskiXLoc = 115;
var bonesKarpinskiYLoc = 40;
var rockyKrayXLoc = 408;
var rockyKrayYLoc = 40;
var pawelKarpinskiXLoc = 701;
var pawelKarpinskiYLoc = 40;
var cecilKarpinskiXLoc = 115;
var cecilKarpinskiYLoc = 309;
var linaLovelaceXLoc = 701;
var linaLovelaceYLoc = 309;*/


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	linaLovelaceImg = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 408,
		y: 309,
		image: countessHamiltonImg
	};

}

	//define your new objects below
    
    function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
}
    
    function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObj = {
		x: 408,
		y: 40,
		image: rockyKrayImg
	};
    
}
    
    function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObj = {
		x: 701,
		y: 40,
		image: pawelKarpinskiImg
	};
    
}
    
    function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: 115,
		y: 309,
		image: cecilKarpinskiImg
	};
    
}
    
    function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	linaLovelaceObj = {
		x: 701,
		y: 309,
		image: linaLovelaceImg
	};
}
    


function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);
}