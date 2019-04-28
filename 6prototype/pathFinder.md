## Path finder

```js
function PathFinder(maze) {

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

pathFinder.numberOfExits(); // returns the number of exits
// implement as a method on 'this', then use PathFinder.prototype
```