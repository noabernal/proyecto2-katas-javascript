const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code"
];

function repeatCounter(list) {
  let contador = {}

  for (let i = 0; i < list.length; i++) {
    if (contador[list[i]]) {
      contador[list[i]]++
    } else {
      contador[list[i]] = 1
    }
  }

  return contador
}

console.log(repeatCounter(words))