
img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function gotPoses(results){
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX +", noseY = " + noseY);
	}
}

function modelLoaded() {
	console.log('Model Loaded')
}

function draw() {
	game()
	if(noseX < 300)
	{
	marioX = marioX - 1;
	}

	if(noseX > 300)
	{
	marioX = marioX + 1;
	}
	if(noseY < 150)
	{
	marioY = marioY - 1;
	}
	
	
	image(img,marioX, marioY, 40, 70); 
}



