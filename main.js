song = "";
song2 = "";

function preload() {
    song = loadSound("audio.mp3");
    song2 = loadSound("audio.mp3")
}

function setup() {
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
}

function draw() {
    image(video,0,0,600,600);
}