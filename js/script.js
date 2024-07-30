"use strict"

    let numberOfFilms;

    function start(){
        numberOfFilms = +prompt('How many films did you already watch?','');

        while(numberOfFilms == '' || numberOfFilms == null  || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How many films did you already watch?','');
        }
    }

    start();

    const personalMovieDB = {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false
    }



    

    function rememberMyFilms(){
        for(let i=0;i<2;i++){
            let a = prompt('One of the last movie you watched?',''),
                b = prompt('What good do you mark it?','');
                if(a !='' && b != '' && a != null && b != null && a.length < 50 && b.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                }else{
                    console.log("error");
                    i--;
                }   
        }
    }

    // rememberMyFilms();

    function detectPorsonalLevel(){
        if(personalMovieDB.count<10){
            alert('Просмотрено довольно мало фильмов');
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert('Вы классический зритель');
        }else if(personalMovieDB.count>30){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    }

    // detectPorsonalLevel();

    function showMyDB(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    }
   

    function writeYourGernes(){
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i-1] = prompt(`Your favorite gernes of films in order ${i}`,'');
        }
    }
    writeYourGernes();
    showMyDB(showMyDB.privat);
    


