console.log("version 0.3 Loaded");

const scoreCounter = document.createElement("img");
const url = chrome.runtime.getURL("counterBackground.png");
    console.log(url);
scoreCounter.src = url;
