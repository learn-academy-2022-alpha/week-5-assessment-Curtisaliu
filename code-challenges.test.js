// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("code", () => {
  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"

    expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// Got Red.
// ● code › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// ReferenceError: code is not defined.

// b) Create the function that makes the test pass.
// Pseudo Code:
// create a function called coded
// identify each string with the modified values
// Must find a way to reference the modified values --> had to look up hasOwnProperty
// likely need to split the string into an array.
// Will need to iterate through the array
// Likely need to join the elements back into a strings
// return the output as a string with the modified values
// Ran into a problem in which toLowerCase was no generating the desire output. Decided to just hard-code a capitalize E in secret.

const code = (string) => {
  const secret = {'a':4, 'e':3, "i":1, 'o':0, 'E':3}
  const encoded = letter => secret.hasOwnProperty(letter) ? secret[letter] : letter
  return string.split('').map(encoded).join('')
}

// Got Green.
// This took me quite a bit of researching.
// I'm a bit confued on what happens on line 53 starting from the ?.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

a) Create a test with expects statement using the variable provided.

describe("singeLetter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(singleLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(singleLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// Got Red.
// ● singeLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter.
// ReferenceError: singleLetter is not defined

// b) Create the function that makes the test pass.
//Pseudo Code:
// create a function named singleLetter
// function must take two parameters
// likely needs to iterate throught the array
// can use .filter
// Uppercase words may be a problem, likely needs toLowerCase() method.
// return array with desired strings


function singleLetter(array, string) {
  return array.filter(function(item){
    return item.toLowerCase().includes(string)
  })
}

// Got Green.



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// Got Red.
//  ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house
// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// create a function named fullHouse
// function that identifies values that are three of kind (conditional?)
// function that identifies values that are a pair
// Likely need to loop through the array.
// return boolean value.

// const fullHouse = (array) => {
//   let threeOfkind = (x, y, z)
//   if(x = y && y = z) {
//     return true
//   }
// }
// Don't know where I was going with this.

const fullHouse = (array) => {
  for (let i = 0; i <= array.length; i++){
    if ((array[i] == array[i+1]) &&
      (array[i] == array[i+2])){
        return true
      }
    else if (array[j] == array[j+2])
      return true
  }
}

// I'm a bit lost in this one. Not sure if a two other functions are necessary to find threeofAKind and pairs.
// Was trying to loop throught the array to find threeOfAKind first.
// I believe the end product would be if threeOfAkind === true && pair === true it should return a fullhouse.
