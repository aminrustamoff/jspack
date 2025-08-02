const newDiv = document.createElement("div"); // Create a <div>
newDiv.textContent = "Hello, I was created with JS!";
newDiv.style.cssText =  `
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
setTimeout(() => newDiv.remove(), 50000);
