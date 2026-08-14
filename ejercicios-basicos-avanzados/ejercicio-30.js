const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let metal = []
let rock = []
let pop = []
let country = []
let grunge = []

for (let cancion of tracks) {

  if (cancion.genre === "Metal") {
    metal.push(cancion)

  } else if (cancion.genre === "Rock") {
    rock.push(cancion)

  } else if (cancion.genre === "Pop") {
    pop.push(cancion)

  } else if (cancion.genre === "Country") {
    country.push(cancion)

  } else if (cancion.genre === "Grunge") {
    grunge.push(cancion)
  }

}

console.log("Metal:", metal)
console.log("Rock:", rock)
console.log("Pop:", pop)
console.log("Country:", country)
console.log("Grunge:", grunge)