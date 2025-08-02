const newDiv = document.createElement("div"); // Create a <div>
newDiv.id = "myDiv"; // Set an ID for the div
newDiv.textContent = "Floating Text Box";
newDiv.style.cssText =  `
                position: absolute;
                top: 100px;
                left: 100px;
                width: 200px;
                height: 150px;
                background-color: lightblue;
                border-radius: 8px;
                padding: 10px;
                z-index: 1000;
            `;
document.body.appendChild(newDiv); 
// setTimeout(() => newDiv.remove(), 50000);

const el = document.getElementById("myDiv");
let isDragging = false, offsetX = 0, offsetY = 0;

el.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - el.offsetLeft;
  offsetY = e.clientY - el.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  el.style.left = (e.clientX - offsetX) + "px";
  el.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
