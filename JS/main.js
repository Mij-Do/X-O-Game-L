let title = document.querySelector(".title");
let turn = 'x';
let squares = [];

function winner (num1, num2, num3) {
    title.innerHTML = `${squares[num1]} Winner`;

    document.getElementById('item' + num1).style.backgroundColor = '#ffce8e';
    document.getElementById('item' + num2).style.backgroundColor = '#ffce8e';
    document.getElementById('item' + num3).style.backgroundColor = '#ffce8e';

    setInterval (function () {
        title.innerHTML += ".";
    }, 1000);
    setTimeout(function () {
        location.reload();
    }, 4000);
}

function gameLogic () {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        winner(1,2,3);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        winner(4,5,6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        winner(7,8,9);
    } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '') {
        winner(1,4,7);
    } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        winner(2,5,8);
    } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        winner(3,6,9);
    } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        winner(1,5,9);
    } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '') {
        winner(3,5,7);
    }
}



function writeXO (id) {
    let ele = document.getElementById(id);
    if (turn === 'x' && ele.innerHTML === '') {
        ele.innerHTML = "X";
        turn = 'o'
        title.innerHTML = "O";
    } else if (turn === 'o' && ele.innerHTML === '') {
        ele.innerHTML = "O";
        turn = "x";
        title.innerHTML = "X";
    }

    gameLogic ();
};