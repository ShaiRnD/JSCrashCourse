'use strict';
function PathFinder(maze) {
    this.maze = maze;

    // this.numberOfExits = () => {
    //     let ans = 0;
    //     const n = this.maze.length - 1;
    //     for(let i = 0; i <= n; i++){
    //         const row = maze[i];
    //         if([0,n].includes(i)){
    //             ans = row.reduce((acc, cur) => !cur ? ++acc : acc, ans);
    //         }else{
    //             ans = !row[0] ? ++ans : ans;
    //             ans = !row[row.length - 1] ? ++ans : ans;
    //         }
    //     }
    //     return ans;
    // };
};

// PathFinder.prototype.numberOfExits = () => { // arrow function doesn't work with protyotype!
PathFinder.prototype.numberOfExits = function() {
    return maze.reduce((acc, row, i) => {
        if([0, this.maze.length - 1].includes(i)){
            acc = row.reduce((acc, cur) => !cur ? ++acc : acc, acc);
        }else{
            acc = !row[0] ? ++acc : acc;
            acc = !row[row.length - 1] ? ++acc : acc;
        }
        return acc;
    }, 0);
};

const maze = [
    [1,1,1,1,1,1,1],
    [1,0,0,0,1,0,1],
    [1,1,1,0,0,0,1],
    [1,0,0,0,1,0,1],
    [1,1,1,1,1,0,1],
    [1,1,0,0,0,0,1],
    [1,1,1,1,1,0,1]
];

const pathFinder = new PathFinder(maze);
console.log(pathFinder.numberOfExits()); // returns the number of exits
// implement as a method on 'this', then use PathFinder.prototype