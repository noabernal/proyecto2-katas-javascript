const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(name, nameList) {

  for (let i = 0; i < nameList.length; i++) {

    if (nameList[i] === name) {
      return [true, i]
    }
  }
  return false  
}

console.log(nameFinder("Tony", names))
//para que me encuentre el resultado

console.log(nameFinder("Noa", names))
//para que me diga que no encuentra el resultado