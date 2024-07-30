"use strict"
const krsDollar = 42;
let grn = +prompt('Enter the amount of grn','');
console.log(grn);
let answer = convert(grn,krsDollar);
console.log(answer);

function convert (grn,krsDollar){
    let dollar ;
    dollar = grn * krsDollar;
    return dollar;
}

function sayHello(name){
    return `Hello, ${name}!`;
}

function returnNeighboringNumbers(a) {
    return [a-1,a,a+1]
}

function getMathResult(a,b) {
    if(typeof(b) !== 'numder' || b<=0){
         return a;
        }
    for(let i=1;i<=b;i++){
        let str = '';

        if(i===b){
            str += `${a*i}`;
        }else{
            str += `${(a*i)}---`};
        
        }
     return str;      
    
}
getMathResult(10,5);

