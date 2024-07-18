"use strict"
function firstTask(){
    for(let i=5;i<=10;i++){
        console.log(i);
    }
}
function secondTask(){
    for(let i=20;i>=10;i--){
        if(i===13){
            break;
        }
        console.log(i);
    }
}

function thirdTask(){
    for(let i=2;i<=10;i++){  
        if(i%2){
            continue;
        } 
        console.log(i);
    }
}

function fourthTask(){
    let i=2;
    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }
    while(i <= 14){
        i++;
        if(i%2===0){
            continue;
        }else{
            console.log(i);
        }
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for(let i=5;i<=10;i++){
        arrayOfNumbers[i-5]=i;
    }
    console.log(arrayOfNumbers);
}


//adventure tasks

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}







