const fetch = require('node-fetch');
const request = require('request');

// request('https://www.zap.co.il/models.aspx?sog=e-tv', function (error, response, body) {
//     console.log('Inside request():');
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //   console.log('body:', body); // Print the HTML
//     console.log('body:', body.length);
// });

let prom = fetch('https://github.com/')
    .then(res => res.text())
    // .then(body => console.log(body));

console.log(1);
prom.then(text => console.log(text.length));
Promise.resolve("hiiiiiii").then(msg => console.log(msg)); 
console.log(2);

// aync await...

// async function baz(){
//     console.log('async', 1);
//     const awaitAns = await prom;
//     console.log('async', 2);
//     console.log('async awaitAns', awaitAns.length);
//     return awaitAns;
// }

// console.log(3);
// baz().then(ans => {console.log('async', ans.length);});
// console.log(4);