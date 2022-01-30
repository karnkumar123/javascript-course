function heavyDuty(){
    const arr = new Array(10000).fill(1);
    console.log('Array created');
    return function(index){
        return arr[index];
    }
}

let a = heavyDuty();
console.log(a(9999));
console.log(a(999));
console.log(a(1098));
console.log(a(900));
