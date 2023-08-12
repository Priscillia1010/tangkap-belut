function startGame() {
  let belutList;
  let kembungList;
  let score = 0;
  let gameOver = false;

  function setGame() {
    for (let i = 0; i < 10; i++) {
      let tile = document.createElement("div");
      tile.id = i.toString();
      tile.addEventListener("click", selectList);
      document.getElementById("board").appendChild(tile);
    }
    setInterval(setBelut, 1100);
    setInterval(setKembung, 1100);
  }

  function getRandomList() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
  }

  function setBelut() {
    if (gameOver) {
      return;
    }
    if (belutList) {
      belutList.innerHTML = "";
    }

    let belut = document.createElement("img");
    belut.src = "./asset/belut.gif";

    let num = getRandomList();
    if (kembungList && kembungList.id == num) {
      return;
    }
    belutList = document.getElementById(num);
    belutList.appendChild(belut);
  }

  function setKembung() {
    if (gameOver) {
      return;
    }
    if (kembungList) {
      kembungList.innerHTML = "";
    }
    let kembung = document.createElement("img");
    kembung.src = "./asset/kembung.webp";

    let num = getRandomList();
    if (belutList && belutList.id == num) {
      return;
    }
    kembungList = document.getElementById(num);
    kembungList.appendChild(kembung);
  }

  function selectList() {
    if (gameOver) {
      return;
    }
    if (this == belutList) {
      function kena() {
        var menang = new Audio("./asset/kena.mp4");
        menang.play();
      }

      kena();
      score += 1;
      document.getElementById("score").innerText =
        "Score : " + score.toString();
    } else if (this == kembungList) {
      function bunyi() {
        var kalah = new Audio("./asset/kalah.mp4");
        kalah.play();
      }

      bunyi();
      const suara = document.querySelector("#backsound");
      suara.pause();
      suara.currentTime = 0;

      document.getElementById("score").innerText =
        "Game Over : " + score.toString();
      gameOver = true;
    }
  }
  const startButton = document.getElementById("startButton");
  const gameContainer = document.getElementById("board");
  function resetGame() {
    gameContainer.innerHTML = "";
  }
  startButton.addEventListener("click", resetGame);
  setGame();
}
startGame();