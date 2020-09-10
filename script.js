Part I

Use the following object for this set of questions:
var users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

// Write a function called printEmails which console.log's each email for the users.
// printEmails();
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com


function printEmails(){
    users.forEach(function(users){
    console.log(users.email);
    })
    }
    
    console.log(printEmails())



// Write a function called printHobbies which console.log's each hobby for each user.
// printHobbies();
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming",
// "Biking",
// "Hiking",
// "Golf",
// "Cooking",
// "Archery",
// "Tennis",
// "Biking",
// "Archery",
// "Volunteering",
// "Biking",
// "Coding",

  
function printHobbies(){
    users.forEach(function(val){
        val.hobbies.forEach(function (value) {
            console.log(value)
        })
    })
}
printHobbies()


  

// Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in
// findHometownByState('CA');
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/
function findHometownByState(string){
  var index = users.findIndex(function(val){
    return val.hometown.state === string
})
      return users[index]
}

findHometownByState("NY")


// Write a function called allLanguages which returns an array of all of the unique values
// allLanguages();
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]



function allLanguages(){
  var result = []
      users.forEach(function(val){
          val.favoriteLanguages.forEach(function (value) {
             result.push(value)
          })
      })
          return result
  }
  allLanguages() 


// Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in
// hasFavoriteEditor('VS Code'); // true
// hasFavoriteEditor('Eclipse'); // false

function hasFavoriteEditor(editor){
  return users.some(function(val){
  return val.favoriteEditor === editor
  })
  }
  
  hasFavoriteEditor("Vim")


// Write a function called findByUsername which takes in a string and returns an object in the users array that has that username
// findByUsername('david');
/*/
{
    username: "david",
    email: "david@test.com",
    years_experience: 12.5,
    favorite_languages: ["JavaScript", "C#", "Swift"],
    favorite_editor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
        city: "Los Angeles",
        state: "CA"
    }
}
/*/


function findbyUsername (string){
  var index = users.findIndex(function(val){
    return val.username === string
})
      return users[index] //returns the user at the index passed in as a string
}

findbyUsername("david")


OR


function findByUsername(string){
  return users.find(function(val){
    return val.username === string
    })
    }
  findByUsername("david");

  

// Part II
// Write a function called vowelCount that accepts a string and returns an object with each key being the vowel and the value being the number of times the vowel occurs in the string (the order of keys in the object does not matter).
// vowelCount('incredible');
// // {i:2, e: 2}
// vowelCount('awesome');
// {a:1, e:2, o:1}

const vowelCount = string => {
  let stringArray = [...string]//changes the string into an array using the spread operator. Another way is using string.split("") method
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let obj = stringArray.reduce((acc, val) => {
      if(vowels.indexOf(val) !== -1){ //checks to see if the val at current iteration count is in the vowels array. if it isn't it will return -1
          acc[val] = (acc[val] || 0) + 1; //sets the objects key and value. At the first count (acc[val] || 0) + 1 will evaluate to (NaN or 0)+ 1, so we will end up having 0 + 1. If that same value is encountered, acc[val] will be 1, (acc[val] || 0) + 1 will evaluate to (1 or 0)+ 1, we will then have 1 + 1. So this increments our values. See page 18 of iterations slide to understand this line better.
      }
      return acc
  },{})
  return obj
}


// Write a function called removeVowels that accepts a string and returns an array of each character that is not a vowel (y should not count as a vowel for this function).
// removeVowels('amazing'); // ["m","z","n","g"]
// removeVowels('fun'); // ["f","n"]
// removeVowels('silly'); // ["s","l","l","y"]

const removeVowels = str => {
  let string = [...str.toLowerCase()]// forgive me i love using spread operators!
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let output = ''
  string.forEach(val => {
      if(vowels.indexOf(val) === -1 ){ //checks to see if the val is in the vowels array. if it's not (returns -1) then it must be a consonant.
          output += val //we then add the value to our output variable
      }
  })
  return output
}
