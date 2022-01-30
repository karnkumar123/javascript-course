// everything in js a objects. We achieve inheritance through prototypal inheritance.

const obj = {};
console.log(obj.__proto__);  // returns object

const arr = [];
arr.__proto__ // returns array
arr.__proto__.__proto__ // returns object ,it means array can access object's method
arr.__proto__.__proto__.__proto__ // returns null

function a(){}
a.__proto__ // returns function native code
a.__proto__.__proto__ // return object , it means function can access object's method

var a = 10;
a.__proto__ // returns Number
a.__proto__.__proto__ // returns object , it means number can access object method
a.__proto__.__proto__.__proto__ // return null
