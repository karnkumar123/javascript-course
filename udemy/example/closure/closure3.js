for(var i=0; i<5;i++){
    setTimeout(() => console.log(i), 1000)
}
for(let i=0; i<5;i++){
    setTimeout(() => console.log(i), 1000)
}

for(let i=0; i<5;i++){
    function closure(index){
        setTimeout(() => console.log(index), 1000)
    }
    closure(i)
}

for(let i=0; i<5;i++){
   (function closure(index){
        setTimeout(() => console.log(index), 1000)
    })(i)
}