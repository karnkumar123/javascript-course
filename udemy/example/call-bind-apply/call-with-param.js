const hero = {
    name: 'Akshay',
    performStunt: function(age, city){
        return `${this.name} performs stunt very well at the age of ${age} in city ${city}`;
    }
}
const heroine = {
    name: 'Katrina'
}

console.log(hero.performStunt.call(heroine, 29, 'Los Angeles'));