'use strict';

let playerNumber = document.getElementById("noOfPlayers");

playerNumber.addEventListener('change', (e) => {
    console.log(e.target.value);
});