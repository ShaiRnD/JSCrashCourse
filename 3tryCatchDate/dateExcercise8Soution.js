// 1.Implement the following function
// getAge(dateStr, [format])
// 
// For example
// getAge("10/10/1993") // test it on your birthday
// 
// Also
// getAge("10/10/1993", "days") // suppose to return your age by days
// 
// 2.Implement the following function
// addDays(dateStr, days)
// which returns a Date instance calculated from the supplied parameters
// 
// For Example
// addDays("10/1/2018", 20) // returns a Date instance representing the 21/10/2018 00:00
// 
// also
// addDays("10/1/2018", -5) // returns a Date instance representing the 26/9/2018 00:00```
// 
// for both functions:
// * if supplied an invalid Date, will throw a TypeError
// * if date does not exist, will throw RangeError.
// For example:
// getAge("2/31/1993") // will throw a RangeError
// addDays("this is no date", 5) // will throw TypeError
// 
// 3.Implement the following function
// Write a JavaScript function to get time differences in hours between two dates. Go to the editor
// Test Data :
// dt1 = new Date("October 13, 2014 08:11:00");
// dt2 = new Date("October 13, 2014 11:13:00");
// console.log(diff_hours(dt1, dt2));
// will print out: 3
// 
// Hint: try to subtract two dates with the '-' operand and see what happens

function getAge(dateStr, format = 'years'){
    validateDateStr(dateStr);
    const now = new Date();
    const date = new Date(dateStr);
    let ans = (now - date) /1000 / 60/ 60/ 24;
    if(format !== 'days'){
        ans /= 365;
    }
    return Math.floor(ans);
}

function addDays(dateStr, days){
    validateDateStr(dateStr)
    const date = new Date(dateStr);
    let milis = date.getTime();
    milis += days * 24 * 60 * 60 * 1000;
    return new Date(milis);
}

function validateDateStr(dateStr){
    const date = new Date(dateStr);
    if(date.toString() === 'Invalid Date'){
        throw TypeError;
    }
    const day = +(dateStr.split('/')[1]);
    if(date.getDate() !== day){
        throw RangeError;
    }
}

function diff_hours(date1, date2){
    const difInMillies = Math.abs(date1 - date2);
    return Math.floor(difInMillies / 1000 / 60 / 60);
}


console.log(getAge('10/10/1993'));
console.log(getAge('1/16/1989'));
console.log(getAge('10/10/1993', 'days'));

console.log(addDays("10/1/2018", 20));
console.log(addDays("10/1/2018", -5));

try{
    console.log(getAge('2/31/1993'));
}catch(e){
    console.log(e);
}

try{
    console.log(addDays("this is no date", 5));
}catch(e){
    console.log(e);
}

const dt1 = new Date("October 13, 2014 08:11:00");
const dt2 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(dt1, dt2));