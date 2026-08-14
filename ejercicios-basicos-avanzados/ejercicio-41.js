function rollDice(caras) {

  return Math.floor(Math.random() * caras) + 1

}


console.log(rollDice(6))
console.log(rollDice(20))
console.log(rollDice(100))