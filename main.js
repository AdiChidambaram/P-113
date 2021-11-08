r = "";
g = "";
b = "";

function setup() {
   canvas = createCanvas(500, 500);
   canvas.position(385, 100);
   video = createCapture(VIDEO);
   video.hide();
}

function draw() {
    image(video, 150, 150, 220, 200);
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r, g, b);
    stroke(r, g, b);
    rect(435, 10, 55, 55);

    fill(r, g, b);
    stroke(r, g, b);
    rect(10, 10, 55, 55);

    fill(r, g, b);
    stroke(r, g, b);
    rect(10, 440, 55, 55);

    fill(r, g, b);
    stroke(r, g, b);
    rect(435, 440, 55, 55);
}