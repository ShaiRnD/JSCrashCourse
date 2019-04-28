'use strict';
const DIRECTION_COORDINATES = [[0,-1],[-1,0],[0,1],[1,0]];
const NUM_OF_DIRECTIONS = DIRECTION_COORDINATES.length;
const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;

class PathFinder{
    constructor(maze, row, column){
        this._maze = maze;
        this._row = row;
        this._column = column;
        this._direction = LEFT;
        this.printMaze();
        this._maze[this._row][this._column]++;
    }

    isExit(row, column){
        return (this._maze[row][column] !== X) && 
            (this._maze.length - 1 === row || 0 === row ||
             this._maze[row].length - 1 === column || 0 === column);
    };

    printMaze(){
        this._maze.forEach(row => {console.log(row.join(''));});
        console.log('');
    };

    turnLeft(){
        this._direction = (this._direction - 1 + NUM_OF_DIRECTIONS) % NUM_OF_DIRECTIONS;
    };

    turnRight(){
        this._direction = (this._direction + 1 + NUM_OF_DIRECTIONS) % NUM_OF_DIRECTIONS;
    };

    existLeftWall(){
        this.turnLeft();
        const ans = this.existFrontWall();
        this.turnRight();
        return ans;
    };

    existFrontWall(){
        const directionRowColumn = DIRECTION_COORDINATES[this._direction];
        const row = this._row + directionRowColumn[0];
        const column = this._column + directionRowColumn[1];
        return this._maze[row][column] === X;
    };

    stepForward(){
        const directionRowColumn = DIRECTION_COORDINATES[this._direction];
        this._row += directionRowColumn[0];
        this._column += directionRowColumn[1];
        this._maze[this._row][this._column]++;
        this.printMaze();
    };

    startWalking(){
        this.printMaze();
        while(!this.isExit(this._row, this._column)){
            if(!this.existLeftWall()){
                this.turnLeft();
                this.stepForward();
                continue;
            }else if(!this.existFrontWall){
                this.stepForward();
                continue;
            }else this.turnRight();
        }
        console.log(`Success! Out from exit: [${this._row},${this._column}]\n`);
    };
};

const X = 'X';
const maze = [
    [X,X,X,X,X,X,X],
    [X,0,0,0,X,0,X],
    [X,X,X,0,0,0,X],
    [X,0,0,0,X,0,X],
    [X,X,X,X,X,0,X],
    [X,X,0,0,0,0,X],
    [X,X,X,X,X,0,X]
];
const maze2 = [
    [X,X,X,X,X,X,X,X,X,X,X,X,X],
    [X,0,X,0,X,0,X,0,0,0,0,0,X],
    [X,0,X,0,0,0,X,0,X,X,X,0,X],
    [X,0,0,0,X,X,X,0,0,X,0,0,X],
    [X,0,X,X,X,0,X,0,X,X,X,0,X],
    [X,0,X,0,X,0,X,0,X,0,0,0,X],
    [X,0,X,0,X,0,0,0,X,X,X,0,X],
    [X,0,X,0,X,X,X,0,X,0,X,0,X],
    [X,0,0,0,0,0,0,0,0,0,X,0,X],
    [X,X,X,X,X,X,X,X,X,0,X,X,X]
];
const startRow = 8, startcolumn = 8;
const pathFinder = new PathFinder(maze2, startRow, startcolumn);
pathFinder.startWalking();