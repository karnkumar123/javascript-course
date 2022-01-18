const hero = {
    name: 'Akshay',
    performStunt: function(age, city){
        return `${this.name} performs stunt very well at the age of ${age} in city ${city}`;
    }
}
const heroine = {
    name: 'Katrina'
}

const a = hero.performStunt.bind(heroine, 29, 'London');
console.log(a());
