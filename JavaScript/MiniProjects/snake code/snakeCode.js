const board = document.getElementById("board");
const diceResult = document.getElementById("diceResult");
const playerPositionText = document.getElementById("playerPosition");
const rollDiceBtn = document.getElementById("rollDice");
const gameContainer = document.getElementById("gameContainer");
const cProg = document.querySelectorAll("#c-prog");
const cProgBtn = document.getElementById("c-prog");
const javascript = document.getElementById("javascript")
//const boardbg = document.querySelector("#board")

let playerPosition = 1;
const player = document.createElement("div");
player.classList.add("player");

// click event listener to c-prog button
cProgBtn.addEventListener("click", () => {
    board.style.backgroundColor = "white";
});

javascript.addEventListener("click", () =>{
    board.style.backgroundColor = "black"
})


// Snakes and Ladders mapping
const snakesLadders = {
    3: 22,  5: 8,   11: 26,  20: 29,  // Ladders
    27: 1,  21: 9,  17: 4,   99: 7    // Snakes
};

// Themes
const themes = {
    1: { boardBg: "green", snakeColor: "darkblue", ladderColor: "cyan" },
    2: { boardBg: "black", snakeColor: "lightyellow", ladderColor: "yellow" },
    3: { boardBg: "yellow", snakeColor: "yellow", ladderColor: "lightblue" },
};

// Start game with selected theme
function startGame(themeId) {
    gameContainer.style.display = "flex";
    board.innerHTML = "";  // Clear 

    document.body.style.backgroundColor = themes[themeId].boardBg;

    // Generate board with colors
    for (let i = 100; i >= 1; i--) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerText = i;
        cell.id = "cell-" + i;

        if (i % 2 === 0) {
            cell.style.color = themes[themeId].snakeColor;
        } else {
            cell.style.color = themes[themeId].ladderColor;
            board.style.background = ""
        }

        board.appendChild(cell);
    }

    playerPosition = 1;
    document.getElementById("cell-1").appendChild(player);
}

// Dice roll function
rollDiceBtn.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceResult.innerText = roll;
    
    let newPosition = playerPosition + roll;
    
    if (newPosition <= 100) {
        playerPosition = newPosition;

        if (snakesLadders[playerPosition]) {
            playerPosition = snakesLadders[playerPosition];
        }

        // Move player
        const newCell = document.getElementById("cell-" + playerPosition);
        newCell.appendChild(player);
    }
    
    playerPositionText.innerText = playerPosition;
    
    if (playerPosition === 100) {
        alert("🎉 You won the game! 🎉");
    }
});
