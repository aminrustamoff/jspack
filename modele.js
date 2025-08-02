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
    
    console.log("Div created by triple left-click!");
}

function resetClickCounter() {
    rightClickCount = 0;
    console.log("Left-click counter reset");
}

// Add event listener for left-click (click event)
document.addEventListener('click', function(e) {
    // No need to prevent default for left-click
    
    // Increment click counter
    rightClickCount++;
    console.log(`Left-click count: ${rightClickCount}`);
    
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

console.log("Left-click listener added. Left-click 3 times to create div!");
