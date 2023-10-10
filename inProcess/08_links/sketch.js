console.log('Extension v0.8 is working');

let t, seconds;
let gClick = 0;
let iClick = 0;
let lClick = 0;
let totalScore = 0;
let scoreMultiplier = 1;
let multiClick = 0;

clickTracking();
linkReplace();

function setup() {
    noCanvas();
}

function draw(){
    scoreDisplay();
    globalTimer();
    scoreCount();
}

function scoreDisplay(){
    let printScore = createP('Total Score: ' + totalScore + '<br>'  + 'Multiplier: ' + scoreMultiplier);
    printScore.style('position', 'fixed');
    printScore.style('padding', '5px');
    printScore.style('background-color', 'orange');
}

function scoreCount() {

    // 1 Second - 1 Point
    const timePoints = int(Math.trunc(seconds));
    // Click - 10 Points
    const globalClickPoints = int((gClick*10)*scoreMultiplier);
    // Image Click - 100 Points
    const imgClickPoints = int((iClick*100)*scoreMultiplier);
    // Link Click - 1000 Points
    const linkClickPoints = int((lClick*1000)*scoreMultiplier);

    totalScore = int(timePoints + imgClickPoints + linkClickPoints + globalClickPoints);
    // console.log("total score:" + totalScore);
}

function multi() {
    multiClick ++;
    scoreMultiplier = int(multiClick);
}

function globalTimer() {
    t = millis();
    if (t <= 999) {
        seconds = 0;
    } else {
        seconds = (t/1000);
    }
}

function userClickedGlobal() {
    gClick ++;
    // console.log('User clicked the document');
}

function userClickedImage() {
    iClick++;
    multi();
    // console.log('User clicked an image');
}

function userClickedLink() {
    lClick++
    multi();
    // console.log('User clicked a link');
}

function clickTracking() {

    // --- Global Clicks --- //
    document.addEventListener("click", userClickedGlobal); 

    // --- Image Clicks --- //
    let imgQuery = document.querySelectorAll('img');
    // Doesn't account for certain styles of image, figure
    imgQuery.forEach((img) => {
        img.addEventListener("click", userClickedImage)
    });
    
    // --- Link Clicks --- //
    let linkQuery = document.querySelectorAll("a");
    linkQuery.forEach((link) => {
        link.addEventListener("click", userClickedLink)
    });
}

function linkReplace() {
    var findLinks = document.querySelectorAll('a');
    // console.log(findLinks);
    for (var i = 0; i < findLinks.length; i++) {
        findLinks[i].href = "#" + findLinks[i].href
    }
}

// Questions
// How to make links accessible with cmd + click
// CMD click sends to google

// Tasks
// Implement time-based multipliers

// Multiplier
// Successive clicks build multi - 500 millis
// Click on image, link, ad +1
// Framecount % 60 https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
// 1 - 5: 1 second | 6 - 10: 3 seconds | 
// let lastClick = 0;
// function clickCooldown() {
//     let timeNow = (new Date()).getTime();
//     if (timeNow < (lastClick + 1000)) {
//         multi();
//     } else {
//         console.log("times up!");
//         multiClick --;
//     }
//     lastClick = timeNow;
// }

