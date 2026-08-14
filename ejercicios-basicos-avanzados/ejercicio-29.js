const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 }
];

let peliculas70 = []
let peliculas80 = []
let peliculas90 = []
let peliculas2000 = []
let peliculas2010 = []

for (let pelicula of starWarsMovies) {

  if (pelicula.releaseYear >= 1970 && pelicula.releaseYear < 1980) {
    peliculas70.push(pelicula)

  } else if (pelicula.releaseYear >= 1980 && pelicula.releaseYear < 1990) {
    peliculas80.push(pelicula)

  } else if (pelicula.releaseYear >= 1990 && pelicula.releaseYear < 2000) {
    peliculas90.push(pelicula)

  } else if (pelicula.releaseYear >= 2000 && pelicula.releaseYear < 2010) {
    peliculas2000.push(pelicula)

  } else if (pelicula.releaseYear >= 2010 && pelicula.releaseYear < 2020) {
    peliculas2010.push(pelicula)
  }

}

console.log("Década de los 70:", peliculas70)
console.log("Década de los 80:", peliculas80)
console.log("Década de los 90:", peliculas90)
console.log("Década de los 2000:", peliculas2000)
console.log("Década de los 2010:", peliculas2010)