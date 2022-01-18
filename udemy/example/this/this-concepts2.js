const person = {
    name: 'Veronica',
    getFullName: function(){
        console.log(this.name);
        let self = this;
        const addSurname = function(){
            console.log(self.name + ' Majumdaar');  // this -> undefined
        }
        addSurname()
    }
}

person.getFullName();