//use Prettier for code to be well-designed and well-styled.
let numbers = [5, 8, 0, 1, 9, 11, 15, 16]

console.log('Original numbers list: ', numbers)

for (let i = 0; i < numbers.length; i++) {
  //remove -1 from numbers.length Because var j start with 0
  for (let j = 0; j < numbers.length; j++) {
    //we cannot use i because i used for indexing
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp
    }
  }
}

console.log('numbers list After ASC sorting: ', numbers)
//Use the same thing in ASC Part
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] < numbers[j + 1]) {
      let temp = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp
    }
  }
}

console.log('numbers list After Desc sorting: ', numbers)
