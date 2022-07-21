const prompt = require('prompt-sync')({
    sigint: true
});

// let userPrompt = prompt('Enter a string: ');
// console.log(`User string: ${userPrompt}`);

// let userNumber = Number(prompt("Enter a number: "));
// console.log(userNumber);

/*
fish {
    name: string,
    weight: number,
    value: number
}
*/


/*
for our descriptive words

2 descriptors and 1 fish type array of descriptors
2 arrays of descriptors
1 array of fish types

*/
// hourCtr - variable to keep track of the current time
// while loop to keep track of time

//  fishKeep.length = totalLength
// variable for total value
// variable for total pounds (no more than 10lbs otherwise game ends)

let fishKept = [];
let descriptor1 = [" ", "Huge", "Miniature", "Big", "Small", "Fat", "Thicc", "Thiccalicious", "Skinny", "Scronny", "Smeagol looking mf"];
let descriptor2 = [" ", "Yellow", "Red", "Purple", "Green", "Blue", "Pink", "Orange", "Aqua", "Gray", "Black"];
let fishType = [" ", "Pikachu", "Lugia", "Raikou", "Snorlax", "Entei", "Suicune", "Ho-oh", "Rayquaza", "Mewtwo", "Zapdos"];
let totalWeight = 0;
let totalValue = 0;
let indivWeight = 0;
let indivValue = 0;
let timeCtr = 0; // 5 to 11
let finishedFishName = '';
let newFish = {};

console.log("\n==========================================\n");

console.log("You are a Pokemon trainer! You have only 6 hours to catch as many Pokemon as you can with the total weight under 10lbs.  It takes roughly 1 hour to catch each Pokemon (they are slippery little turds). The goal is to keep it under 10lbs and maximize your value over the 6 given hours.");
console.log('\n');

console.log("The time is 0:00am. So far you've caught: 0 fish, 0 lbs, $0.00");

console.log("\n==========================================\n");
 
console.log("You just ran into your first Pokemon !! What are you going to do!?!?");
console.log('\n');
/* 
 ******************************
 ****** SECTION TAKING CARE OF CREATING FISH ******
 ******************************
 */

// Description 1
let d1 = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10)
    finishedFishName += " " + (arr[randomItem]);
}

// Description 2
let d2 = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10)
    finishedFishName += " " + (arr[randomItem]);
}

// Description 3
let fishName = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10)
    finishedFishName += " " + (arr[randomItem])
}

/* 
 ******************************
 ****** SECTION TAKING CARE OF CREATING FISH ******
 ******************************
 */

/* 
 ******************************
 ****** FISH WEIGHT SECTION ******
 ******************************
 */

let fishWeight = () => {
    let weight = (Math.ceil(Math.random() * 1000) / 200)
    return weight
}
indivWeight = fishWeight();

/* 
 ******************************
 ****** FISH WEIGHT SECTION ******
 ******************************
 */


/* 
 ******************************
 ****** FISH VALUE SECTION ******
 ******************************
 */

let fishValue = () => {
    let value = Number(Math.ceil(Math.random() * 1000) / 50)
    return value
}
indivValue = fishValue();

/* 
 ******************************
 ****** FISH VALUE SECTION ******
 ******************************
 */


/* 
 ******************************
 ****** FULL FISH OBJECT ******
 ******************************
 */
let createdFish = (name, weight, value) => {
    let newFish = {
        name: name,
        weight: weight,
        value: value 
    }
    return newFish;
}
// console.log(createFish(finishedFishName, indivWeight, indivValue));
/* 
 ******************************
 ****** FULL FISH OBJECT ******
 ******************************
 */

while (timeCtr < 6 && totalWeight < 10) {

    // Functions running through the arrays of predetermined information
    d1(descriptor1);
    d2(descriptor2);
    fishName(fishType);
    // Functions running through the arrays of predetermined information
    fishWeight()
    fishValue()
    indivWeight = fishWeight();
    indivValue = fishValue();
    newFish = createdFish(finishedFishName, indivWeight, indivValue);
    console.log(newFish)
    console.log("\n==========================================\n");
    let userInput = prompt("Would you like to (c)atch this Pokemon? OR Would you like to (r)elease this Pokemon?: ");

    if (userInput === 'c') {
        fishKept.push(newFish.name);
        totalValue += newFish.value;
        totalWeight += newFish.weight;
        console.log(newFish);
        console.log("\n==========================================\n");
        console.log('You just kept this Pokemon, lets keep hunting !');
         console.log("\n==========================================\n");

    } if (userInput === 'c' && timeCtr === 4) {
        console.log("This is your last turn, make it count !!!!")
    }
    
    else if (userInput === 'r') {
        console.log('\n===== You just released this Pokemom, better luck next chance!')
        console.log(newFish);
        console.log("\n==========================================\n");
        console.log('You just released this Pokemon, lets keep hunting !')
         console.log("\n==========================================\n");
    }

    //  (createdFish(finishedFishName, indivWeight, indivValue));

    timeCtr++;
    console.log(`The time is ${timeCtr}:00 am`);
    console.log('\n');
    console.log(`Your total weight and value: ${totalWeight}lbs with a total value of $${totalValue}`);
    console.log('\n');
    finishedFishName = '';
}
console.log("GAME OVER");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("\n");
console.log(`Pokemon you've caught: ${fishKept}`);
console.log("\n");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("\n");


// QUESTIONS FOR GREYSON
// 1. How do I update the time each time? The function aboce is giving me one result forever
// 