console.log('sketch loaded');

let img1;

// function preload() {
    // img1 = loadImage('images/counterBackground01.png', img1 => {image(img1,0,0)});
//     console.log('preloaded')
// }

function setup() {
    console.log('sketch setup');
    img1 = loadImage('https://github.com/CraigMoore3/webScoreCounter/blob/main/02_p5js/images/counterBackground01.png', img1 => {image(img1,0,0)});

//     let canvas = createCanvas(400, 400);
//     canvas.position(0,0);
}

function draw() {
    console.log('sketch looping');
}