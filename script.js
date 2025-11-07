const disc = document.getElementById("disc");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const audioPlayer = document.getElementById("audioPlayer");
const leerMas = document.getElementById("leerMas");
const extraInfo = document.getElementById("extraInfo");
const playlistItems = document.querySelectorAll(".playlist-item");
const brand = document.getElementById("brand");
const userPopup = document.getElementById("userPopup");

let isPlaying = false;
let currentDesc = "";

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    disc.style.animationPlayState = "paused";
    playBtn.textContent = "▶ Reproducir";
  } else {
    audioPlayer.play();
    disc.style.animationPlayState = "running";
    playBtn.textContent = "⏸ Pausar";
  }
  isPlaying = !isPlaying;
});

stopBtn.addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  disc.style.animationPlayState = "paused";
  playBtn.textContent = "▶ Reproducir";
  isPlaying = false;
});

playlistItems.forEach(item => {
  item.addEventListener("click", () => {
    playlistItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    const src = item.getAttribute("data-src");
    const title = item.getAttribute("data-title");
    const artist = item.getAttribute("data-artist");
    const desc = item.getAttribute("data-desc");

    audioPlayer.src = src;
    songTitle.textContent = title;
    songArtist.textContent = artist;
    currentDesc = desc;

    audioPlayer.play();
    disc.style.animationPlayState = "running";
    playBtn.textContent = "⏸ Pausar";
    isPlaying = true;
  });
});

leerMas.addEventListener("click", () => {
  if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
    extraInfo.textContent = currentDesc;
    extraInfo.style.display = "block";
  } else {
    extraInfo.style.display = "none";
  }
});

audioPlayer.addEventListener("ended", () => {
  disc.style.animationPlayState = "paused";
  playBtn.textContent = "▶ Reproducir";
  isPlaying = false;
});

brand.addEventListener("click", () => {
  userPopup.style.display = (userPopup.style.display === "flex") ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!brand.contains(e.target) && !userPopup.contains(e.target)) {
    userPopup.style.display = "none";
  }
});
