let admin ={
    isAdmin: true,
    name: 'Admin office',
    sayYourName: function(){
        if(this.isAdmin){
            return this.name;
        }
    }
}

let admin1 = {
    name: 'Admin Assistant'
}

admin1.__proto__ = admin;
let res = admin1.sayYourName();
console.log(res);

// admin1 can access all variables and functions of admin. First it checks in admin1 object , and if doesn't find, it will 
// go to one level up in prototype

console.log(admin1.isPrototypeOf(admin)) // false, admin in not inheriting admin1
console.log(admin.isPrototypeOf(admin1)) // true, admin1 is inheriting admin
