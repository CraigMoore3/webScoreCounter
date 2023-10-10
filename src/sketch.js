// --- Web Score Counter --- //
// --- GLOBALS --- //
let t, seconds;
let gClick = 0;
let iClick = 0;
let lClick = 0;
let totalScore = 0;
let scoreMultiplier = 1;
let multiClick = 0;

// --- On Extension Load --- //
console.log('Extension v1.0 is working');
// --- Tracking Clicks --- //
clickTracking();
// --- Reassigns Links --- //
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
    // Prints user's Total Score at the top of the page

    let printScore = createP('Total Score: ' + totalScore + '<br>'  + 'Multiplier: ' + scoreMultiplier);
    printScore.style('position', 'fixed');
    printScore.style('padding', '5px');
    printScore.style('background-color', 'orange');
}

function scoreCount() {
    // Turns clicks into score, handles multiplier, returns Total Score

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
    // Adds a multiplier with each successive click

    multiClick ++;
    scoreMultiplier = int(multiClick);
}

function globalTimer() {
    // Tracks time since reload

    t = millis();
    if (t <= 999) {
        seconds = 0;
    } else {
        seconds = (t/1000);
    }
}

// --- Increases respective click values --- //

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
    // --- Initializes Event Listeners for each type of click --- //

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
    // --- Finds and replaces all link sources with "#"

    var findLinks = document.querySelectorAll('a');
    // console.log(findLinks);
    for (var i = 0; i < findLinks.length; i++) {
        findLinks[i].href = "#" + findLinks[i].href
    }
}

