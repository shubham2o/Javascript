var number = [1, 2, 3, 4, 5, 6];
var numberLength = number.length;
var randomNumberPlayer1 = Math.floor(Math.random() * numberLength);
var randomNumberPlayer2 = Math.floor(Math.random() * numberLength);

function myFunction() {
    if (randomNumberPlayer1 == 0) {
        document.getElementById("refresh").innerHTML = "PLAYER 2 WINS!";
        document.getElementById("player1").innerHTML = "1";
        document.getElementById("player2").innerHTML = randomNumberPlayer2;
        document.getElementById("imgDice1").src = "images/dice1.png";
    }
    else if (randomNumberPlayer2 == 0) {
        document.getElementById("refresh").innerHTML = "PLAYER 2 WINS!";
        document.getElementById("player1").innerHTML = randomNumberPlayer1;
        document.getElementById("player2").innerHTML = "6";
        document.getElementById("imgDice2").src = "images/dice6.png";
    }
    else if (randomNumberPlayer1 == randomNumberPlayer2) {
        document.getElementById("refresh").innerHTML = "DRAW";
        document.getElementById("player1").innerHTML = randomNumberPlayer1;
        document.getElementById("player2").innerHTML = randomNumberPlayer2;
    }
    else if (randomNumberPlayer1 > randomNumberPlayer2) {
        document.getElementById("refresh").innerHTML = "PLAYER 1 WINS!";
        document.getElementById("player1").innerHTML = randomNumberPlayer1;
        document.getElementById("player2").innerHTML = randomNumberPlayer2;
    }
    else if (randomNumberPlayer1 < randomNumberPlayer2) {
        document.getElementById("refresh").innerHTML = "PLAYER 2 WINS!";
        document.getElementById("player1").innerHTML = randomNumberPlayer1;
        document.getElementById("player2").innerHTML = randomNumberPlayer2;
    }
}
