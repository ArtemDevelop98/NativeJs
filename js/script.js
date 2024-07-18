"use strict"

    let numberOfFilms;

    numberOfFilms = +prompt('How many films did you already watch?','');

    const personalMovieDB = {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        privat:false
    }

    const a = prompt('One of the last movie you watched?',''),
          b = prompt('One of the last movie you watched?',''),
          c = prompt('What good do you mark it?',''),
          d = prompt('What good do you mark it?','');

    personalMovieDB.movies[a] = c;
    personalMovieDB.movies[b] = d;

    console.log(personalMovieDB);

    


