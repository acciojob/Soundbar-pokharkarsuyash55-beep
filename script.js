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

let audio;

buttons.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn")) {

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        let sound = event.target.textContent.trim();

        audio = new Audio("./sounds/" + sound + ".mp3");

        audio.play();
    }

    if (event.target.classList.contains("stop")) {

        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

    }

});