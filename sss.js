const box = document.getElementById("box");
const surprise = document.getElementById("surprise");
const heartsContainer = document.getElementById("hearts");
const music = document.getElementById("bg-music");

box.addEventListener("click", () => {
  box.style.display = "none";
  surprise.classList.remove("hidden");
  music.play();
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heart.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }

  // Continue creating floating hearts
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
