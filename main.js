function setup(){
    canvas = createCanvas(500,400);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    canvas.center();
}