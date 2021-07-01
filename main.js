lipstickX = 0;
lipstickY = 0;

function preload(){
    lipstick=loadImage("https://i.postimg.cc/GpWnnJDK/lipstick.png");
}

function draw(){
    image(video, 0, 0, 300, 300);
   // fill(52, 2, 250);
    //stroke(2, 250, 225);
    //circle(noseX , noseY , 20);
  image(lipstick , lipstickX , lipstickY , 45 , 20);
}

function setup(){
    canvas=createCanvas(300 , 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet= ml5.poseNet(video , modelLoded);
    poseNet.on("pose" , gotPoses);
}

function modelLoded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Lipstick X ="+results[0].pose.nose.x);
        console.log("Lipstick Y ="+results[0].pose.nose.y);
        lipstickX=results[0].pose.nose.x-20;
        lipstickY=results[0].pose.nose.y+18 ;

    }
}

function take_snapshot(){
    save("LipstickFilter.jpg");
}