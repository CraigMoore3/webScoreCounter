console.log('Extension v0.8 is working');
clickTracking();
let t, seconds;
let gClick = 0;
let iClick = 0;
let lClick = 0;
let totalScore = 0;
let scoreMultiplier = 1;
let multiClick = 0;

function setup() {
    let c = createCanvas(250, 60);
    c.position(0,0);
}

function draw(){
    background(255);
    scoreDisplay();
    globalTimer();
    scoreCount();
}

function scoreDisplay() {
    fill(0);
    textSize(15);
    textFont('courier');
    text(('Total Score: ' + totalScore), 20, 20);
    text(('Multiplier: ' + scoreMultiplier + 'x'), 20, 45);
}

function scoreCount() {
    // 1 Second - 1 Point
    // Math.trunc() removes decimal
    const timePoints = int(Math.trunc(seconds));
    // Click - 10 Points
    const globalClickPoints = int((gClick*10)*scoreMultiplier);
    // Image Click - 100 Points
    const imgClickPoints = int((iClick*100)*scoreMultiplier);

    totalScore = int(timePoints + imgClickPoints + globalClickPoints);
    console.log("total score:" + totalScore);
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

function clickTracking() {
    // --- Selects Elements --- //
    // Running into a problem with querySelectorAll vs querySelector
    // querySelectorAll flags imgQuery.addEventListener as "not a function"
    // Returning to querySelector fixes the issue. 
    // Do I need to hold the return of querySelectorAll in an array?
    let imgQuery = document.querySelector('img');

    // --- Event Tracking --- //
    document.addEventListener("click", userClickedGlobal); 
    imgQuery.addEventListener("click", userClickedImage);
}



// Questions
// How to get scoreCounterBackground01.png to load?
// How to use querySelectorAll with addEventListener
// How to target all images on page?
// How to make links accessible with cmd + click
// Will i replace href? How to block links? replace with # sign, select all 'a'
// CMD click sends to google

// numbers = [1,2,3];
// numbersCopy = numbers.map((x) => x);

// Tasks
// Give score counter absolute positioning - follow user
// Implement time-based multipliers

// Add For Loop, Element Array, Element.addEventListener
    // array.forEach(Element => {
        // Element.addEventListener()})




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

