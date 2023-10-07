console.log('sketch loaded');

let url, img;
let width = 500;
let height = 500;

function setup() {
    url = chrome.runtime.getURL("counterBackground01.png");
    console.log(url);
}
    img = document.createElement("img");
    img.src = chrome.runtime.getURL("counterBackground01.png");
    img.position(0,0);


// let imgs = document.getElementsByTagName('img');

// for (imgElt of imgs) {
//     let file = "counterBackground01.png";
//     let url = chrome.runtime.getURL(file);
//     imgElt.src = url;
//     console.log(url);
// }

// function preload() {
//     img1 = createImg('counterBackground01.png');
//     img1.src = chrome.extension.getURL(counterBackground01.png);
//     img1.position(0,0);
//     console.log('preloaded')
// }

// function setup() {
//     console.log('sketch setup');
//     // let c = createCanvas(width, height);
//     // c.position(0,0);

//     img1 = createImg('counterBackground01.png');
//     img1.src = chrome.extension.getURL(counterBackground01.png);
//     img1.position(0,0);

// }

// function draw() {
//     console.log('sketch looping');
// }


