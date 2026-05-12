const app = document.getElementById('app');
const boxContainer = document.getElementById('boxContainer');

//Setting time out for 2 seconds and making a button using JS
setTimeout(() => {
    const btn = document.createElement("button");
    btn.innerText = "Add Box";
    btn.id = "addBoxBtn";
    app.appendChild(btn);
}, 2000);

//Added a mutation observer to observe changes when the Add box button is clicked.
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.id === "addBoxBtn") {
                node.addEventListener("click", addBox);
                console.log("Button added and event listener attached.");
            }
        });
    });
});

//This basically activates the mutation observer. 
observer.observe(app, { childList: true });

//Function created to add a box with random backgound colors.
function addBox(){
    const box = document.createElement("div");
    box.className = "box";
    boxContainer.appendChild(box);

    box.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    boxContainer.appendChild(box);
}

