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
    
    console.log("Div created by triple right-click!");
}

function resetClickCounter() {
    rightClickCount = 0;
    console.log("Right-click counter reset");
}

// Add event listener for right-click (contextmenu event)
document.addEventListener('contextmenu', function(e) {
    // Prevent the context menu from appearing
    e.preventDefault();
    
    // Increment click counter
    rightClickCount++;
    console.log(`Right-click count: ${rightClickCount}`);
    
    // Clear existing timer
    if (rightClickTimer) {
        clearTimeout(rightClickTimer);
    }
    
    // Check if we've reached the required number of clicks
    if (rightClickCount >= REQUIRED_CLICKS) {
        createDiv();
        resetClickCounter();
    } else {
        // Set timer to reset counter if no more clicks
        rightClickTimer = setTimeout(resetClickCounter, CLICK_TIMEOUT);
    }
});

console.log("Right-click listener added. Right-click 3 times to create div!");
