// const arr = [1,2,3];
// arr.__proto__ // returns base array
// Array.prototype // returns base array
// arr.__proto__ === Array.prototype
// Array.prototype.hasOwnProperty('push') // returns true
// arr.hasOwnProperty('push') // returns false
// its means const arr = [1,2,3,4], here arr is nothing but a reference where data [1,2,3,4] is stored.
// whenever we use arr.push(100), we are already using prototypal inheritance. Beause arr.hasOwnProperty('psuh') returns false.
// arr inherited push property from base array i.e Array.prototype or arr.__proto__
// __proto__ refers to prototype of base like, [1,2].__proto__ == Array.prototype
// only functions have the prototype property