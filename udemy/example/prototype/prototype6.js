// we can modify or add our own method on base Array, or Date, or Object. 
// we shouldn't modify existing method because it will affect the whole application.
// we will create a method which will return all elements on even location values from an array.



Array.prototype.findAllEvenLocationsData = function(){
    let arr = this;
    let finalArr = [];
    for(let i=0; i<arr.length;i=i+2){
        finalArr.push(arr[i]);
    }
    return finalArr;
}


const arr = [1,4,2,7,9,45,12,78,32,455,6766,12]

let res = arr.findAllEvenLocationsData();
console.log(res);