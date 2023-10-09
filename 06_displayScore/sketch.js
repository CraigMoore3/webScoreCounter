// --- Extension Loads --- //
console.log('Extension v0.6 is working');
clickTracking();
let t, seconds;
let gClick = 0; 
let iClick = 0;
let lClick = 0;
let totalScore = 0;

function setup() {
    let c = createCanvas(250, 30);
    c.position(0,0);
}

function draw() {
    background(255);
    scoreDisplay();
    globalTimer();
    scoreCount();
}

function scoreDisplay() {
    fill(0);
    textSize(15);
    textFont("courier");
    text(("Total Score: " + totalScore), 20, 20);
}

function scoreCount() {
    // 1 Second - 1 Point
    // Math.trunc() removes decimal
    const timePoints = int(Math.trunc(seconds));
    // Click - 10 Points
    const globalClickPoints = int(gClick*10);
    // Image Click - 100 Points
    const imgClickPoints = int(iClick*100);

    totalScore = int(timePoints + imgClickPoints + globalClickPoints);
    console.log("total score:" + totalScore);
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

    // Add For Loop, Element Array, Element.addEventListener
    // array.forEach(Element => {
        // Element.addEventListener()})
}


// g - global | i - image | l - link

// --- Return Document Info --- //
// --- Find all Links and Images --- //
// console.log(document.links);
// console.log(document.images);

// --- Design Mode --- //
// document.designMode = 'on';
// console.log(document.designMode);

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