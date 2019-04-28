const arr = [{
    name:"Dan",
    occupation:"Teacher",
    height:1.78,
    salary:1000,
    bonus:100,
    address: "Tel Aviv"
},
{
    name:"Yossi",
    occupation:"Manager",
    height:1.58,
    salary:2000,
    bonus:200,
    address: "Rishon"
},
{
    name:"Itzik",
    occupation:"Gardner",
    height:1.68,
    salary:1500,
    bonus:300,
    address: "Rehovot"
}];

const predicate = function (item) {
    return item.height > 1.6;
};

const newArr = arr.filter(predicate);

const newArr1 = arr.filter(function (item) {
    return item.height > 1.6;
});

console.log(newArr1.length);

const func = function (x) {    
    console.log("hi")
};

//implement filter
function filter(arr, cb) {
    const ansArr = [];
    for (const item of arr) {
        if(cb(item)){
            ansArr.push(item);
        }
    }
    return ansArr;
}

const newArr2 = filter(arr, predicate);

console.log(newArr2.length); // 2


function forEach(arr, cb) {
    // typeof(arr) - object
    // typeof(callback) - function

    for (const item of arr) {
        cb(item);
    }        
}

forEach(arr, func);

forEach(arr, function(x) {
    console.log(x.salary)    
});



