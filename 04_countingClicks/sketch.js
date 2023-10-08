console.log('Extension v0.4 is working');
clickTracking();

function setup() {

}

function draw() {
    globalTimer();
}

function globalTimer() {
    let t = second();
    console.log(t);
}

function clickTracking() {
    // --- Selects Elements --- //
    // Running into a problem with querySelectorAll vs querySelector
    // querySelectorAll flags imgQuery.addEventListener as "not a function"
    // Returning to querySelector fixes the issue. 
    // Do I need to hold the return of querySelectorAll in an array?
    let imgQuery = document.querySelector('img');

    // --- Event Tracking --- //
    document.addEventListener("click", globalClickMsg); 
    imgQuery.addEventListener("click", imgClickMsg);
}

// --- Console Logs --- //
function globalClickMsg() {console.log('User clicked the document');}
function imgClickMsg() {console.log('User clicked an image');}

// --- Return Document Info --- //
// --- Find all Links and Images --- //
// console.log(document.links);
// console.log(document.images);

// --- Design Mode --- //
// document.designMode = 'on';
// console.log(document.designMode);