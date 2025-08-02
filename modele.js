// Right-click counter and timer
let rightClickCount = 0;
let rightClickTimer = null;
const CLICK_TIMEOUT = 2000; // Reset counter after 2 seconds of no clicks
const REQUIRED_CLICKS = 3;

function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello, I was created with JS!";
    newDiv.style.cssText = `
        position:fixed;
        bottom:10px;
        right:10px;
        background-color: rgba(141, 179, 220, 0.8);
        color:white;
        padding:8px 14px;
        border-radius:6px;
        font-family:sans-serif;
        font-size:14px;
        z-index:9999;
        box-shadow:0 0 6px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(newDiv);
    setTimeout(() => newDiv.remove(), 5000);
    
    console.log("Div created by Shift+Z!");
}

// Add event listeners for keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Track if Shift is pressed
    if (e.key === 'Shift') {
        shiftPressed = true;
    }
    
    // Check for Shift+Z combination
    if (e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault(); // Prevent any default browser behavior
        createDiv();
        console.log("Shift+Z pressed!");
    }
});

document.addEventListener('keyup', function(e) {
    // Track when Shift is released
    if (e.key === 'Shift') {
        shiftPressed = false;
    }
});

console.log("Keyboard listener added. Press Shift+Z to create div!");
