
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");

let score = 0;
let scoreInterval = null;
let isAlive = null;

// Jump Function
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

// Collision Check
function checkCollision() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!");
    resetGame();
  }
}

// Score Update
function updateScore() {
  score++;
  scoreDisplay.innerText = "Score: " + score;
}

// Game Reset
function resetGame() {
  clearInterval(isAlive);
  clearInterval(scoreInterval);

  // Reset game variables
  score = 0;
  scoreDisplay.innerText = "Score: 0";

  // Reset positions (optional depending on your CSS/animation)
  cactus.style.left = "600px";

  // Restart the game after a short delay
  setTimeout(startGame, 1000);
}

// Start Game
function startGame() {
  // Reset cactus animation by removing and re-adding class
  cactus.classList.remove("cactus-move");
  void cactus.offsetWidth; // force reflow
  cactus.classList.add("cactus-move");

  // Start intervals
  isAlive = setInterval(checkCollision, 10);
  scoreInterval = setInterval(updateScore, 100);
}

// Jump listener
document.addEventListener("keydown", jump);

// Start the game initially
startGame();
