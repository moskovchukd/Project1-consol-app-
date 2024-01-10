const numberOfFilms = + prompt("How many films have you already watched?");
let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
let i;
for(i = 0; i < 2; i++){
    let filmName = prompt("What is your last watched film?"),
        filmRate = prompt("How would you rate it?");
    personalMovieDB.movies[filmName] = filmRate;
}

console.log(personalMovieDB);
