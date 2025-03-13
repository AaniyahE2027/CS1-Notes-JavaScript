/* This is a MULTI-LINE COMMENT
The code below is an example STATEMENT
(instruction/command) 
Every STATEMENT ends in a SEMICOLON (;)
 */
console.log("Welcome to JavaScript!");

// This is a SINGLE-LINE COMMENT

// console.log() is a FUNCTION that displays info
console.log("My name is Aaniyah");

//DECLARE a new varible (buying a box)
let luckyNumber;

//ASSIGN a value to the varible (putting that item in a box)
luckyNumber= 23;

//DECLARE & ASSIGN in one statement
let worstNumber = 6;

// You can "PASS IN" a VARIBLE into a FUNCTION
console.log(luckyNumber);
console.log(worstNumber);

//Can CHANGE the value stored in a variable
let mood = "Happy"
console.log(mood);
mood = "Sad";
console.log(mood);

// Can COPY the value from one varialbe into another
let isHappy = true;
let isThrilled;
isThrilled = isHappy
console.log(isThrilled)

//MATH OPERATIONS
let score = 0;
score = score + 5;
console.log(score)
score = score -10;
console.log(score)
score = score * (-3)
console.log(score)
score = score / 5
console.log(score)

//Can combine multiple operators in one statment
// Order of evaulation follow PEMDAS!

score = (score ** 2 - 23 + 4) * 2 / 4;
console.log(score);

// STRING CONCATENATION (merging)
// Concatentate two STRING LITERALs
// String literals are contained in "QUOTES"
let greeting = "Hello " + "Friend";
console.log(greeting);

// Can combine VARIABLES with string literals
let username = "cutiepie876";
console.log("Welcome, " + username + "!")

//Concatentation will convert the non-string data
console.log(4+5); //9 (add numbers)
console.log("4" + 5); //45 (combines the number)
console.log(4 + '5'); // 45 (combines the number)

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1 // LONG WAY
counter++; //SHORT WAY (does the same thing)
console.log(counter);
counter--;
console.log(counter)

/* FUNCTIONS:
    Reuseable sets of code statements that perform a specific task or process */

// Example of CALLING (using) a function
console.log("helloooo")

// Example of DECLARING (creating) a function
function skincare() {
    //3 statements (steps/instructions) 
    console.log("1. Double cleanse")
    console.log("2. Apply toner")
    console.log("3. Moisturize")
}
// To CALL (run) our function, say its name
skincare();
skincare(); //repeated the routine again!

/* Funtions are RECIPES:
    Reliably perform the same set of actions for a consistent result.
    PARAMETERS (input) are like ingredients.
    RETURN values (output) are like the completed meal.
*/

// Sandwich-making example of a function
// that requiques PARAMETERS and RETURNS data
// (takes input, provides output)
function makeSandwich(bread, filling, sauce) {
    // function BODY (procedure/ recipe steps)
    let sandwich = filling + " sandwich with " + sauce + " on " + bread;
    return sandwich;
}
// Call a function that RETURNS data
// store the output in a varible
let burger = makeSandwich("bun", "patty", "ketchup")
console.log(burger);

// Try the function with different ARGUMENT (input data)
let blt = makeSandwich("roll", "toppings", "mayo")
console.log(blt)