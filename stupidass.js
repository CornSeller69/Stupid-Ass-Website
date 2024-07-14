let music = Boolean(false);
let theme = new Audio("hipshop.mp3"); // Tutaj tworzone jest audio...

function toggleMusic() {
    let button = document.getElementById("play");
    if (!music) {
        button.textContent = "AHHH!!!! TURN THAT SHIT OFF!!!!!!!!!";
        music = true;
        theme.play(); // tu jest grana muza (audio)
        document.body.removeEventListener("mouseover", toggleMusic);
    } else if (music) {
        button.textContent = "Listen to some REAL music over here!";
        music = false;
        theme.pause();
        theme.currentTime = 0;
    }
}