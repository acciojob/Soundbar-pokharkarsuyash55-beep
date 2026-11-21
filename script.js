//your JS code here. If required.

let buttons = document.querySelector("#buttons");

buttons.addEventListener("mousedown", (event) => {
	 if (event.target.tagName === "BUTTON") {
        event.target.style.boxShadow = "0px 0px 10px black";
    }
});

buttons.addEventListener("mouseup", (event) => {
	 if (event.target.tagName === "BUTTON") {
        event.target.style.boxShadow = "none";
    }
});