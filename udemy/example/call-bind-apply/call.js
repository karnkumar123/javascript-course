const hero = {
    name: 'Akshay',
    performStunt: function(){
        return `${this.name} performs stunt very well`;
    }
}
const heroine = {
    name: 'Katrina'
}

console.log(hero.performStunt.call(heroine));