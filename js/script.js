


const numberOfFilms = +prompt("How many films did you watch?","");

const persomalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt("One of your films witch did you watch last time?",""),
      b = prompt("What mark do you give it?",""),
      c = prompt("One of your films witch did you watch last time?",""),
      d = prompt("What mark do you give it?","");

      persomalMovieDB.movies[a] = b;
      persomalMovieDB.movies[c] = d;

console.log(persomalMovieDB);