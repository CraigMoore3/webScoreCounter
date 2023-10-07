console.log('sketch loaded');

let width = 500;
let height = 500;

// function preload() {
//     img1 = createImg('counterBackground01.png');
//     img1.position(0,0);
//     console.log('preloaded')
// }



function setup() {
    console.log('sketch setup');
    let c = createCanvas(width, height);
    c.position(0,0);
}

function draw() {
    console.log('sketch looping');
    background(0);
    fill(255);

    let typeTest = createP(counter());
    console.log(counter);
    typeTest.style('font-color', 'white');
    typeTest.position(15,15);
}

function counter() {
let millisecond = millis();
text('milliseconds');
}


