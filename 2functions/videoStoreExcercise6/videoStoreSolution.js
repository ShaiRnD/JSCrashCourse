"use strict"
// 1. Go through this code and try to understand what it does
    // a. See what can be changed to make this code more clear and easy to maintaine,
    // Each time you do a refactor make sure the code still runs as it should
    // refactor hints: meaningfull variable names, functions, magic numbers and constant strings, obvious comments, let/const, ternary operator
  // 2. Add an option to support output in html form, see example, kipp in mind that more output options should be easy to add
    
    
const TEXT = 0, HTML = 1;

const MOVIE_CODE_REGULAR = 'regular';
const MOVIE_CODE_NEW = 'new';
const MOVIE_CODE_CHILDREN = 'children';

const MOVIE_CODES = {
  regular:{
    initialPrice:2,
    maxDays:2,
    lateFactor:1.5
  },
  new:{
    initialPrice:0,
    maxDays:0,
    lateFactor:3
  },
  children:{
    initialPrice:1.5,
    maxDays:3,
    lateFactor:1.5
  }
}

function generateStatement(customer, movies, format) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  const movieTitleAmountPairs = [];
  for (const rental of customer.rentals) {
    const movie = movies[rental.movieID];
    const thisAmount = amountFormula(MOVIE_CODES[movie.code], rental.days);
    // add bonus for a two day new release rental
    frequentRenterPoints += movie.code === MOVIE_CODE_NEW && rental.days > 2 ? 2 : 1;
    
    //print figures for this rental
    movieTitleAmountPairs.push([movie.title, thisAmount]);
    totalAmount += thisAmount;
  }

  return formatDictionary[format](customer.name, movieTitleAmountPairs, totalAmount, frequentRenterPoints);
}

const formatDictionary = {};
formatDictionary[TEXT] = textFormat;
formatDictionary[HTML] = HTMLFormat;

function textFormat(customerName, movieTitleAmountPairs, totalAmount, frequentRenterPoints){
  let result = `Rental Record for ${customerName}\n`;
  for (const pair of movieTitleAmountPairs) {
    result+= `\t${pair[0]}\t${pair[1]}\n`
  }
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;
  return result;
}

function HTMLFormat(customerName, movieTitleAmountPairs, totalAmount, frequentRenterPoints){
  let result = `<h1>Rental Record for <em>${customerName}</em></h1>\n`;
  result += `<table>\n`;
  for (const pair of movieTitleAmountPairs) {
    result+= `\t<tr><td>${pair[0]}</td><td>${pair[1]}</td></tr>\n`
  }
  result += `</table>\n`;
  result += `<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points</p>\n`;
  return result;
}

function amountFormula(movieCodeConsts, daysTotal){;
  const lateDays = daysTotal > movieCodeConsts.maxDays ? daysTotal - movieCodeConsts.maxDays : 0;
  return movieCodeConsts.initialPrice + lateDays * movieCodeConsts.lateFactor;
}

const customer = {
  "name": "martin",
  "rentals": [
    {"movieID": "F001", "days": 3},
    {"movieID": "F002", "days": 1},
  ]
}

const movies = {
  "F001": {"title": "Ran", "code": "regular"},
  "F002": {"title": "Trois Couleurs: Bleu", "code": "regular"},
}

console.log(generateStatement(customer, movies, HTML));