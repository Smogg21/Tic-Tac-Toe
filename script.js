// Setting up the gameBoard module

let gameBoardModule = (function(){
    let gameBoard = [];
    return {};
})();

// Setting up the displayController module
let displayControllerModule = (function(){
    let testF = () => (console.log("Testing private function call inside of a module objeact......."))
    return {testF};
})();

// Setting up the player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => { playerName;
    console.log("This is the name of player " + playerNumber + "......." +playerName); }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

let Justin = createPlayer("Justin", 1, "X");
let James = createPlayer("James", 2, "O");