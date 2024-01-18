"use strict";
let numberOfFilms;

 function start(){  
    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("How many films have you already watched?");
    }
}
start();

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        let filmName = prompt("What is your last watched film?"),
            filmRate = prompt("How would you rate it?");
            if(filmName == null || filmName.length > 50 || filmRate == null || filmName == "" || filmRate == ""){
                console.log("error!");
                i--;
            } else{
                personalMovieDB.movies[filmName]=filmRate;
            } 
    }    
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert("You have watched a few films");
    }  else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("You are an average film-watcher");
    } else if (personalMovieDB.count >= 30){
        alert('You are a real cinema worm');
    } else {
        alert("An error has occured!");
    }
}
detectPersonalLevel();

function writeYourGenres(){
    let genre;
    for(let i = 1; i <= 3; i++ ){
        genre = prompt(`Your favourite genre number ${i}`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();

function showMyDB(){
    if(personalMovieDB.privat){
        return
    } else{ 
        console.log(personalMovieDB);
    }
}

showMyDB();
