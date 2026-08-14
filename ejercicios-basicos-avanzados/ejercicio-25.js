const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 }
];

let peliculasAntiguas = 0
let peliculasModernas = 0

for (let pelicula of movies) {
  if (pelicula.releaseYear < 2000) {
    peliculasAntiguas++
  } else {
    peliculasModernas++
  }
}

console.log("Películas anteriores al 2000:", peliculasAntiguas)
console.log("Películas posteriores al 2000:", peliculasModernas)