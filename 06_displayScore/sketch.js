// --- Extension Loads --- //
console.log('Extension v0.5 is working');
clickTracking();
let t, seconds;
let gClick = 0; 
let iClick = 0;
let lClick = 0;
function setup() {}

function draw() {
    globalTimer();
    scoreCount();
}

function scoreCount() {
    // 1 Second - 1 Point
    // Math.trunc() removes decimal
    const timePoints = int(Math.trunc(seconds));
    // Click - 10 Points
    const globalClickPoints = int(gClick*10);
    // Image Click - 100 Points
    const imgClickPoints = int(iClick*100);

    const totalScore = int(timePoints + imgClickPoints + globalClickPoints);
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
}


// g - global | i - image | l - link

// --- Return Document Info --- //
// --- Find all Links and Images --- //
// console.log(document.links);
// console.log(document.images);

// --- Design Mode --- //
// document.designMode = 'on';
// console.log(document.designMode);