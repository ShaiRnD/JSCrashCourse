# Wall Follower

The Wall Follower algorithm is one of the simplest algorithms to solve a "simply connected maze". meaning a maze that all its walls are connected to the outside wall.  

Create a small app that will demonstrate this algorithm

### The input
* a maze represented by a matrix where "X" is a wall and "0" is a corridor. the maze should have at least one exit (a 0 placed on the outside wall)
* a starting point represented by x, y
Note: assume all input is valid. (the maze is legal, the starting point is not on a wall...)

Here's a sample maze you can use:

```
X,X,X,X,X,X,X,X,X,X,X,X,X      
X,0,X,0,X,0,X,0,0,0,0,0,X  
X,0,X,0,0,0,X,0,X,X,X,0,X  
X,0,0,0,X,X,X,0,0,X,0,0,X  
X,0,X,X,X,0,X,0,X,X,X,0,X 
X,0,X,0,X,0,X,0,X,0,0,0,X  
X,0,X,0,X,0,0,0,X,X,X,0,X  
X,0,X,0,X,X,X,0,X,0,X,0,X  
X,0,0,0,0,0,0,0,0,0,X,0,X  
X,X,X,X,X,X,X,X,X,0,X,X,X  
```
It looks like this:
```
▓▓▓▓▓▓▓▓▓▓▓▓▓  
▓ ▓ ▓ ▓     ▓  
▓ ▓   ▓ ▓▓▓ ▓  
▓   ▓▓▓  ▓  ▓  
▓ ▓▓▓ ▓ ▓▓▓ ▓  
▓ ▓ ▓ ▓ ▓   ▓  
▓ ▓ ▓   ▓▓▓ ▓  
▓ ▓ ▓▓▓ ▓ ▓ ▓  
▓         ▓ ▓  
▓▓▓▓▓▓▓▓▓ ▓▓▓  

```

### The Job: Implement the algorithm
Here's a video explaining it [in detail](https://youtu.be/yz0EOsUkwD4)  
make sure your program works using `console.log`. test it with different mazes.