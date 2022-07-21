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

console.log("You are a Pokemon trainer! You have only 6 hours to catch as many Pokemon as you can with the total weight under 10lbs.  It takes roughly 1 hour to catch each Pokemon (they are slippery little turds). The goal is to keep it under 10 lbs and maximize your value over the 6 given hours.");
console.log('\n');

console.log("The time is 0:00 am. So far you've caught: 0 fish, 0 lbs, $0.00");

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


//  GENERATING THE WEIGHT
let fishWeight = () => {
    let weight = (Math.ceil(Math.random() * 1000) / 200)
    return weight
}
indivWeight = fishWeight();

//  GENERATING THE VALUE
let fishValue = () => {
    let value = Number(Math.ceil(Math.random() * 1000) / 50)
    return value
}
indivValue = fishValue();

//  FULL FISH OBJECT
let createdFish = (name, weight, value) => {
    let newFish = {
        name: name,
        weight: weight,
        value: value
    }
    return newFish;
}


while (timeCtr <= 5 && totalWeight < 10) {
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
    // First fish of the game
    console.log(newFish)
    console.log("\n");
    let userInput = prompt("Would you like to (c)atch this Pokemon? OR Would you like to (r)elease this Pokemon?: ");
    console.log("\n==========================================\n");

    if (userInput === 'c') {
        if (totalWeight + newFish.weight > 10) {
            console.log('\n===You cannot catch this Pokemon because it will put you over your weight limit!===\n')
            console.log(`Your total weight is: ${totalWeight}lbs. Your total value is: $${totalValue}`);
            console.log("\n");
            timeCtr++
            console.log(`The time is ${timeCtr}:00 am`);
            continue;
        }
        fishKept.push(newFish.name);
        totalValue += newFish.value;
        totalWeight += newFish.weight;
        // console.log(newFish);
        // console.log("\n==========================================\n");
        console.log('You just kept this Pokemon, lets keep hunting !');
        console.log("\n==========================================\n");

    } if (userInput === 'c' && timeCtr === 4) {
        console.log("This is your last turn, make it count !!!!")
    } else if (userInput === 'r') {
        console.log('\n===== You just released this Pokemom, better luck next chance!')
        console.log(newFish);
        console.log("\n==========================================\n");
        console.log('You just released this Pokemon, lets keep hunting !')
        console.log("\n==========================================\n");
    }

    timeCtr++;
    console.log("\n");
    console.log(`The time is ${timeCtr}:00 am`);
    console.log('\n');
    console.log(`Your total weight is: ${totalWeight}lbs. Your total value is: $${totalValue}`);
    console.log('\n');
    finishedFishName = '';
}

// Once the game is done stuff
console.log("\n");
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