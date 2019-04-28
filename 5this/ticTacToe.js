'use strict';
// function TicTacToe() {
//     const board = [[0,0,0],
//                    [0,0,0],
//                    [0,0,0]
//                   ];
// };

// const ticTacToe = new TicTacToe();
// ticTacToe.move(0,0); // X in 0,0
// ticTacToe.print(); // prints the board
// ticTacToe.move(0,0); // throws exception "cell is occupied"
// ticTacToe.move(1,0); // O in 1,0
// ticTacToe.checkWin(); // returns X,O,undefined (if in progress) or "draw"

function TicTacToe() {
    const board = [[0,0,0],
                   [0,0,0],
                   [0,0,0]
                  ];
    this.turn = 'O';

    this.print = () => {
        board.forEach(row => {console.log(row);});
        console.log('');
    };

    this.move = (row, col) => {
        this.turn = this.turn === 'X' ? 'O' : 'X';
        if(board[row][col]){
            throw 'cell is occupied';
        }
        board[row][col] = this.turn;
    };

    this.checkWin = () => {
        const b = board;
        const winHorizontal = 
            (b[0][0] && b[0][0] === b[0][1]) && (b[0][1] === b[0][2]) ||
            (b[1][0] && b[1][0] === b[1][1]) && (b[1][1] === b[1][2]) ||
            (b[2][0] && b[2][0] === b[2][1]) && (b[2][1] === b[2][2]);
        const winVertical = 
            (b[0][0] && b[0][0] === b[1][0]) && (b[1][0] === b[2][0]) ||
            (b[0][1] && b[0][1] === b[1][1]) && (b[1][1] === b[2][1]) ||
            (b[0][2] && b[0][2] === b[1][2]) && (b[1][2] === b[2][2]);
        const winDiagnal = 
            (b[0][0] && b[0][0] === b[1][1]) && (b[1][1] === b[2][2]) ||
            (b[0][2] && b[0][2] === b[1][1]) && (b[1][1] === b[2][0]);
        if(winHorizontal || winVertical || winDiagnal){
            return this.turn;
        }else{
            if(!b.every(row => row.every(spot => spot))) return undefined;
            return 'draw';
        }
    };
};

// const ticTacToe = new TicTacToe();
// ticTacToe.move(0,0); // X in 0,0
// ticTacToe.print();
// // ticTacToe.move(0,0); // throws exception "cell is occupied"
// ticTacToe.move(1,0); // O in 1,0
// ticTacToe.print();

// console.log(ticTacToe.checkWin()); // returns X,O,undefined (if in progress) or "draw"
// ticTacToe.move(1,1);
// ticTacToe.print();
// ticTacToe.move(1,2);
// ticTacToe.print();
// ticTacToe.move(2,2);
// ticTacToe.print();
// console.log(ticTacToe.checkWin());// win for X

const ticTacToe2 = new TicTacToe();
ticTacToe2.move(0,0);
ticTacToe2.move(1,0);
ticTacToe2.move(0,1);
ticTacToe2.move(1,1);
ticTacToe2.move(1,2);
ticTacToe2.move(0,2);
ticTacToe2.print();
console.log(ticTacToe2.checkWin());
ticTacToe2.move(2,1);
ticTacToe2.move(2,2);
ticTacToe2.move(2,0);
ticTacToe2.print();
console.log(ticTacToe2.checkWin());// draw
