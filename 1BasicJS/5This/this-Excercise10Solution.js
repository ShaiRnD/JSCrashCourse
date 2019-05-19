'use strict';
// Pupil(name)

// pupil.addGrade(grade) // grade is a number
// pupil.getAverage() // returns the grades average


// create 2 pupils, add grades, get average. what happens when i omit the "new" keyword

function Pupil(name){
    this.name = name;
    this.grades = [];

    this.addGrade = grade => {this.grades.push(grade);};
    this.getAverage = () => this.grades.reduce((acc, cur) => acc + cur) / this.grades.length;
};

const shai = new Pupil("Shai");
const jon = new Pupil("Jon");
// const jon = Pupil("Jon"); // when I  omit the "new" word it is just a regular function which doesn't return anything, the const jon will be undefined


shai.addGrade(100);
shai.addGrade(90);
shai.addGrade(95);

jon.addGrade(100);
jon.addGrade(70);
jon.addGrade(85);

console.log('Shais average:' + shai.getAverage());
console.log('Jons average:' + jon.getAverage());

