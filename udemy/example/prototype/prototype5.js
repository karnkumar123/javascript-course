let human = {
    no_of_legs: 4,
    no_of_hands: 2
}


let karn = Object.create(human);
karn.name = 'Karan';
console.log(karn.no_of_legs);

// we shouldn't use __proto__ for inherit, using Object.create(human), achieving same inheritance

console.log(human.isPrototypeOf(karn)) // true
