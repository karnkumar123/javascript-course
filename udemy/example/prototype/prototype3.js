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

for(let prop in admin1){
    let myStr = `${prop} has own property of admin1 ${admin1.hasOwnProperty(prop)}`;
    console.log(myStr);
}

// We shouldn't use __proto__ for inheritance. We will use some different way later.  

