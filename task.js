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

//Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt
const fs = require('fs')
//Use try  to define a block of code to be tested for errors while it is being executed.
try {
  //Read file and put it in data var as a string
  const data = fs.readFileSync('./data.txt', 'utf8')
  //split this one string Relying on the comma to array of strings
  const stringNumbersArray = data.split(',')
  //using map method to transformation each string to integer No.
  const numbersArray = stringNumbersArray.map((numberString) =>
    parseInt(numberString)
  )
  console.log('Original numbers list from data.txt: ', numbersArray)
  //make clone for an original array to ASC it and keep original
  const ClonedNumbersArrayToSortAsc = numbersArray
  //sorting
  for (var i = 0; i < ClonedNumbersArrayToSortAsc.length; i++) {
    var temp = ClonedNumbersArrayToSortAsc[i]
    for (var j = i - 1; j >= 0 && ClonedNumbersArrayToSortAsc[j] > temp; j--) {
      ClonedNumbersArrayToSortAsc[j + 1] = ClonedNumbersArrayToSortAsc[j]
    }
    ClonedNumbersArrayToSortAsc[j + 1] = temp
  }

  console.log('numbers list After sorting: ', ClonedNumbersArrayToSortAsc)
  //return all integer to string to move it to output.txt
  const ascNumbersAsString = ClonedNumbersArrayToSortAsc.toString()
  //use this method to create file and write the array of strings on it
  fs.writeFileSync('./output.txt', `Asc sorting => ${ascNumbersAsString} \n`)
  //use catch to define a block of code to be executed, if an error occurs in the try block.
} catch (err) {
  console.error(err)
}
