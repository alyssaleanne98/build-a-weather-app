// A. Q + A

// How do we assign a value to a variable?
// the value, which comes after "=" determines what the variable represents.

// How do we change the value of a variable?
//"let" can be used to change the value of a variable throughout the course of the program. 

// How do we assign an existing variable to a new variable?
// We use the "=" operator to give the variable a new value. 

// Remind me, what are declare, assign, and define?
// Declare: registers a variable in the corresponding scope
// assign: assigns a specified value to the variable
//define: assigns a value to the allocated memory

// What is pseudocoding and why should you do it?
// pseudocoding is an artificial and informal language that helps programmers develop algorithms. 

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

//20% of your time should be devoted to setting up your project vs 80% of your time actually completing your code. 

// B. Strings
//create a variable called firstVariable

// var firstVariable; 

// Change the value of this variable to some number

//  firstVariable = 5; 

// Store the value of firstVariable in a new variable called secondVariable
// let firstVariable = secondVariable; 
// Change the value of secondVariable to any string.

// let secondVariable = "hello there"; 

// What is the value of firstVariable? 

// firstVariable; 
// console.log(firstVariable)

//Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

// const myName = "Alyssa Cervantes"; 
// console.log("Hello, my name is " + myName); 

// C. Booleans

// const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' ==='Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false === false)
//   console.log(e == 'Kevin');
//   console.log(a !== b !== c); 

// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)

//   console.log(a < a + d); // note: the answer is a simple arithmetic equation, not something "weird"

//   console.log(48 !== '48');

//   // D. The farm 

// //   Declare a variable animal. Set it to be either "cow" or something else
// let animal = "cow";
// // Write code that will print out "mooooo" if the it is equal to cow
// // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

// if (animal === "cow") {
//     console.log("moooooo!");
// } else {
//     console.log("hey! you're not a cow")
// }
// animal = "pig";
// animal = "cow"; 

// // E. Driver's Ed

// // Make a variable that holds a person's age; be semantic
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// let personAge = "17";
// if (personAge >="16") {
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young")
// }
// personAge = "15";
// personAge = "20";

// // II. Loops

// // Remember: USE let when you initialize your for loops!
// // This is GOOD: for(let i = 0; i < 100; i++)
// // This is NO GOOD: for(i = 0; i < 100; i++)

// // A. The basics
// // Write a loop that will print out all the numbers from 0 to 10, inclusive

// let num = 0
// do {
//     console.log(num)
//     num += 1
// } while (num <= 10)

// Write a loop that will print out all the numbers from 10 up to and including 400

// let num = 10
// do {
//     console.log(num)
//     num += 1
// } while (num <= 400)

// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// let num = 12
// do {
//     console.log(num)
//     num += 3
// } while (num <= 4000) 

// // B. Get even
// // Print out the numbers that are within the range of 1 - 100
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for (let b = 2; b < 102; b += 2){
// 	console.log(b + " is an even number"); 
// };

// // C. Give me Five
// // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

// for (let a = 1; a < 101; a++){
// 	if (0 === a % 5 && a % 3 === 0){
// 		console.log("I found a " + a + ". High five!");
// 		console.log("I found a " + a + ". Three is a crowd");
// 	} else if (a % 5 === 0){
// 		console.log("I found a " + a + ". High five!");
// 	} else if (a % 3 === 0){
// 		console.log("I found a " + a + ". Three is a crowd");
// 	}
// };

// // D. Savings account
// // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// // Check your work! Your bank_account should have $55 in it.

// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// // Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0;
// for (let c = 1; c < 11; c++){
// 	bank_account += c;
// }
// console.log(bank_account);

// bank_account = 0;
// for (let c = 1; c< 101; c++){
//     bank_account += c * 2;
// }
// console.log(bank_account);



// // What are the things in an array called?
// // the items in the list, known as elements. 

// // Do Arrays guarantee those things will be in order?
// // In an array, we place multiple values in a sequential list. 

// // What real-life thing could you model with an array?
// // You can model a grocery list that contains the food items needed.

// //Create an array that contains three quotes and store it in a variable called quotes
// // 
// const quotes = ["goodmorning", "good afternoon", "good night"]; 

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?

// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);

// // Change the value of "Hello"to "World"
// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();


// const randomThings = [1, 10, "Hello", true]
// randomThings[0];
// randomThings[2] = "World";
// console.log(randomThings)


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?

// ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"] 
// ourClass[2] = "Sardine";
// console.log(ourClass[2]);

// // Change the value of "Github" to "Octocat"
// // Add a new element, "Cloud City" to the array

// ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"] 
// ourClass.pop("Github"); 
// ourClass.push("Octocat");
// ourClass.push("Cloud City");
// console.log(ourClass)

// E. Mix it up 

// Add the string "Egon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

// Mutating an array means to change the array itself instead of returning a new array with new changes. 

// const myArray = [5, 10, 500, 20];
// myArray.push("Egon");
// myArray.pop(); 
// myArray.unshift("Bob Marley");
// myArray.shift();
// myArray.reverse();
// console.log(myArray);


// F. Biggie Smalles
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
// let numInput = 0;
// if (numInput < 100) {
//     console.log("little number");
// } else if (numInput >= 100) {
//     console.log("big number");
// }
// numInput = 200;

// Monkey in the Middle; 
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

// let monkeyNumber = 0;
// if (monkeyNumber < 5){
//     console.log("little number"); 
// } else if (monkeyNumber > 10){
//     console.log("big number");
// } else { 
//     console.log("monkey"); 
// }
// monkeyNumber = 20;

// H. What's in your closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  //What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas. 
  
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
//   console.log("Kristen is rocking that" +the third item in Kristyns closet+ "today!"); 

  
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// IV. Functions 
// A. printGreeting
// const printGreeting =(name) => {
//     return "Hello there, " + name + "!";
// }
// console.log(printGreeting("Slimer")); 

// B. printCool 
// const printCool = (argument) => {
//     return argument + " is cool ";
// }
// console.log(printCool("Captain Reynolds"));

// C. calculateCube 

// const calculateCube = (number) => {
//     return number * number * number; 
// };
// console.log(calculateCube(5));

// D. isVowel

// const isVowel = (letter) => {
//     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
//     return true;
// } else {
//     return false;
// }
// }; 

// console.log(isVowel("a"));
// console.log(isVowel("e"));
// console.log(isVowel("i"));
// console.log(isVowel("o"));
// console.log(isVowel("u"));

// console.log(isVowel("b"));

// E.getTwoLengths

// const getTwoLengths = (string1, string2) => {
//     const lengthArray = [string1.length, string2.length]; 
//     return lengthArray; 
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

// const getMultipleLengths = (string1, string2, string3, string4, string5) => {
//     const multipleLengthsArray = [string1.length, string2.length, string3.length, string4.length, string5.length];
//     return multipleLengthsArray; 
// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); 


// G. maxOfThree

// const maxOfThree = (number1, number2, number3) => {
//     const threeNumArray = [number1, number2, number3];
//     threeNumArray.sort(function(a, b) {return a - b}); 
//     return threeNumArray [2];
// }
// console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// note: ++ adds on to 
// const printLongestWord = ( arrayOfStrings ) => {
//     let longest = '';
// //     for ( var a = 0; a < arrayOfStrings.length; a ++ ){
// //       if ( arrayOfStrings[a].length > longest.length ){
// //         longest = arrayOfStrings[a];
// //       }
// //     }
// //     return longest;
// //   }
// // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// //Objects 
// //A. Make a user object
// //Create an object called user.
// // Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name: "Alyssa Cervantes",
    email: "alyssa.cervantes198@gmail.com",
    age: 23,
    purchased: [] 
} 
// console.log(user)

// // Update the user
// // Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// // Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

// // C. Adding keys and values
// //Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).


user.email = "alycer1998@gmail.com";
user.age++; 
user ['address'] = "San Francisco";
// console.log (user) 

// // D. Shopaholic!
// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.

// user.purchased.push("carbohydrates"); 

// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.

// user.purchased.push("peace of mind");
// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.

// user.purchased.push("Merino jodhpurs");

// // Console.log just the "Merino jodhpurs" from the purchasedarray.

// console.log(user.purchased[2]);

// E. Object-within-object

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// user.friend = {
//     name: "Alexis",
//     age: 23, 
//     location: "San Francisco",
//     purchased: []
// }
// // Console.log just the friend's name
// console.log(user.friend.name);
// // Console.log just the friend's location
// console.log(user.friend.location)
// // CHANGE the friend's age to 55
// user.friend.age = 55; 
// // The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// user.friend.purchased.push("The One Ring");
// // The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// user.friend.purchased.push("A latte"); 
// // Console.log just "A latte" from the friend's purchasedarray.

// console.log(user.friend.purchased[1]); 

// F. Loops 
//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console. 

// for (let i = 0; i < user.purchased.length; i++) {
//     if (user.purchased[i].selected)
//     console.log(user.purchased[i]); 
// }


// G. Functions can operate on objects 

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.
let updateUser = function(){
    user.age++;
    user.name = user.name.toUpperCase(); 
}
updateUser();
console.log(user.age);
console.log(user.name);

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

let oldAndLoud = function(person) {
    person.age++;
    person.name = person.name.toUpperCase();
} 
console.log(user.friend.name); 
console.log(user.friend.age); 