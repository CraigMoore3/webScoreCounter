// --- Global Events --- //
console.log("Chrome Extension is working");

// --- Selects Element --- ///
const pHover = document.querySelector('p');
console.log(pHover);

// --- Registers Event Listener --- ///
pHover.addEventListener("click", shout);

// --- Defines Event Function --- //
function shout(event){
    console.log("AHHH!");
}