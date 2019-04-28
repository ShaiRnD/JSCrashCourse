"use strict"
// 1. Go through this code and try to understand what it does
    // a. See what can be changed to make this code more clear and easy to maintaine,
    // Each time you do a refactor make sure the code still runs as it should
    // refactor hints: meaningfull variable names, functions, magic numbers and constant strings, obvious comments, let/const, ternary operator
// 2. Add an option to support output in html form, see example, kipp in mind that more output options should be easy to add

function statement(customer, movies) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;
    for (let r of customer.rentals) {
      let movie = movies[r.movieID];
      let thisAmount = 0;
  
      // determine amount for each movie
      switch (movie.code) {
        case "regular":
          thisAmount = 2;
          if (r.days > 2) {
            thisAmount += (r.days - 2) * 1.5;
          }
          break;
        case "new":
          thisAmount = r.days * 3;
          break;
        case "childrens":
          thisAmount = 1.5;
          if (r.days > 3) {
            thisAmount += (r.days - 3) * 1.5;
          }
          break;
      }
  
      //add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if(movie.code === "new" && r.days > 2) frequentRenterPoints++;
  
      //print figures for this rental
      result += `\t${movie.title}\t${thisAmount}\n` ;
      totalAmount += thisAmount;
    }
    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  
    return result;
  }


let customer = {
  "name": "martin",
  "rentals": [
    {"movieID": "F001", "days": 3},
    {"movieID": "F002", "days": 1},
  ]
}

let movies = {
  "F001": {"title": "Ran", "code": "regular"},
  "F002": {"title": "Trois Couleurs: Bleu", "code": "regular"},
}

console.log(statement(customer, movies));