// const multiply = base => {
//     return function(num){
//         return base * num;
//     }   
// }

const multiply = base => num => base * num;

const multiplyByTwo = multiply(2);
const multiplyByThree = multiply(3);

console.log(multiplyByTwo(1), multiplyByTwo(2), multiplyByTwo(3), multiplyByTwo(4), multiplyByTwo(5));
console.log(multiplyByThree(1), multiplyByThree(2), multiplyByThree(3), multiplyByThree(4), multiplyByThree(5))

