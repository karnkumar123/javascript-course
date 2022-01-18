const person = {
    name: 'Veronica',
    getFullName: function(){
        console.log(this.name);
        const addSurname = function(){
            console.log(this.name + ' Majumdaar');  // this -> undefined
        }
        addSurname.call(this) // or apply
    }
}

person.getFullName();