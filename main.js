noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(800,130);

    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "difference = " + difference);
    }
}

function modelLoaded(){
    console.log("Model is Initialized");
}

function draw(){
background("#969A97");
textSize(difference);
fill("#F90093");
stroke("#F90093");
text("Siddy", noseX - 300, noseY);
}