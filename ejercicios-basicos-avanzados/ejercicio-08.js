const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];


function findLongestWord(stringList) {
  let palabraMasLarga = stringList[0]

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > palabraMasLarga.length) {
      palabraMasLarga = stringList[i]
    }
  }

  return palabraMasLarga
}

console.log(findLongestWord(avengers))