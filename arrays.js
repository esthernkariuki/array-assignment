//  last element 
let arr1 = [3, 7, 34, 90, 12];
let arr2 = [true, "green", "where", 12, 56];

console.log("Last element of arr1:", arr1[arr1.length - 1]);
console.log("Last element of arr2:", arr2[arr2.length - 1]);

// Join the array elements into a string
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let myNewPets= myPets.join(",");
console.log( myNewPets);

// Sorting the array 
let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(arr3.sort())

// Removing duplicates 
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let firstArr = [];
let duplicatedArr = [];

arr.forEach((item) => {
  if (!firstArr.includes(item)) {
    firstArr.push(item);
  } else {
    duplicatedArr.push(item);
  }
});

console.log(firstArr);
console.log(duplicatedArr);


// Search for a word in the array
let arr5 = ["the", "way", "x", 4];
let searchingArray = "food";
if (Answer = arr5.includes(searchingArray) )
    console.log(searchingArray)
else
     console.log("the search word was not found");


// Sort the string
let word = "renniw";
let sortedresult = word.split('')
                        .sort()
                        .join('');
console.log( {sortedresult });

// Inserting 'Tomato' at the 5th index in the array of fruits
let fruits = Array(10);
fruits[4] = 'Tomato';
console.log( fruits);