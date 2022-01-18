const person = {
    name: 'Veronica',
    getFullName: function(){
        console.log(this.name);
        const addSurname = () => {
            console.log(this.name + ' Majumdaar');  // this -> undefined
        }
        addSurname()
    }
}

person.getFullName();