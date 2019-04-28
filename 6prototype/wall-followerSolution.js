'use strict';
const DIRECTION_COORDINATES = [[0,-1],[-1,0],[0,1],[1,0]];
const NUM_OF_DIRECTIONS = DIRECTION_COORDINATES.length;
const LEFT = 0, UP = 1, RIGHT = 2, DOWN = 3;

function PathFinder(maze,row,column) {
    this.maze = maze;
    this.row = row;
    this.column = column;
    this.direction = LEFT;
    this.printMaze();
    this.maze[this.row][this.column]++;
};

PathFinder.prototype.isExit = function(row, column){
    return (this.maze[row][column] !== X) && 
        (this.maze.length - 1 === row || 0 === row ||
         this.maze[row].length - 1 === column || 0 === column);
};

PathFinder.prototype.printMaze = function() {
    this.maze.forEach(row => {console.log(row.join(''));});
    console.log('');
};

PathFinder.prototype.turnLeft = function(){
    this.direction = (this.direction - 1 + NUM_OF_DIRECTIONS) % NUM_OF_DIRECTIONS;
};

PathFinder.prototype.turnRight = function(){
    this.direction = (this.direction + 1 + NUM_OF_DIRECTIONS) % NUM_OF_DIRECTIONS;
};

PathFinder.prototype.existLeftWall = function(){
    this.turnLeft();
    const ans = this.existFrontWall();
    this.turnRight();
    return ans;
};

PathFinder.prototype.existFrontWall = function(){
    const directionRowColumn = DIRECTION_COORDINATES[this.direction];
    const row = this.row + directionRowColumn[0];
    const column = this.column + directionRowColumn[1];
    return this.maze[row][column] === X;
};

PathFinder.prototype.stepForward = function(){
    const directionRowColumn = DIRECTION_COORDINATES[this.direction];
    this.row += directionRowColumn[0];
    this.column += directionRowColumn[1];
    this.maze[this.row][this.column]++;
    this.printMaze();
};

PathFinder.prototype.startWalking = function() {
    this.printMaze();
    while(!this.isExit(this.row, this.column)){
        if(!this.existLeftWall()){
            this.turnLeft();
            this.stepForward();
            continue;
        }else if(!this.existFrontWall){
            this.stepForward();
            continue;
        }else this.turnRight();
    }
    console.log(`Success! Out from exit: [${this.row},${this.column}]\n`);
}

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