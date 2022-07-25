const prompt = require('prompt-sync')({
    sigint: true
});



let pokemonKept = [];
let descriptor1 = [" ", "Huge", "Miniature", "Big", "Small", "Fat", "Thicc", "Thiccalicious", "Skinny", "Scronny", "Smeagol looking mf"];
let descriptor2 = [" ", "Yellow", "Red", "Purple", "Green", "Blue", "Pink", "Orange", "Aqua", "Gray", "Black"];
let descriptor3 = [" ", "Pikachu", "Lugia", "Raikou", "Snorlax", "Entei", "Suicune", "Ho-oh", "Rayquaza", "Mewtwo", "Zapdos"];
let totalWeight = 0;
let totalValue = 0;
let indivWeight = 0;
let indivValue = 0;
let timeCtr = 1; 
let finishedPokemonName = '';
let newPokemon = {};

console.log("\n==========================================\n");

console.log("You are a Pokemon trainer! You have only 6 hours to catch as many Pokemon as you can with the total weight under 10 lbs. It takes roughly 1 hour to catch each Pokemon (they are slippery little turds). The goal is to keep it under 10 lbs and maximize your value over the 6 given hours.");
console.log('\n');

console.log("The time is midnight. So far you've caught: 0 fish, 0 lbs, $0.00.");

console.log("\n==========================================\n");
console.log(`The time is ${timeCtr}:00 pm`);
console.log('\n');
console.log("You just ran into your first Pokemon !! What are you going to do!?!?");
console.log('\n');
/* 
 ******************************
 ****** SECTION TAKING CARE OF CREATING FISH ******
 ******************************
 */

// Description 1 
let d1 = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10) // randomItem is the index number that comes out of this 
    finishedPokemonName += " " + (arr[randomItem]);
}

// Description 2
let d2 = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10) // randomItem is the index number that comes out of this 
    finishedPokemonName += " " + (arr[randomItem]);
}

// Description 3
let d3 = (arr) => {
    let randomItem = Math.ceil(Math.random() * 10) // randomItem is the index number that comes out of this 
    finishedPokemonName += " " + (arr[randomItem])
}

/* 
 ******************************
 ****** SECTION TAKING CARE OF CREATING FISH ******
 ******************************
 */


//  GENERATING THE WEIGHT
let pokeWeight = () => {
    let weight = (Math.ceil(Math.random() * 1000) / 200)
    return weight
}
indivWeight = pokeWeight();

//  GENERATING THE VALUE
let pokeValue = () => {
    let value = (Math.ceil(Math.random() * 1000) / 50)
    return value
}
indivValue = pokeValue();

//  FULL FISH OBJECT
let createdPokemon = (name, weight, value) => {
    newPokemon = {
        name: name,
        weight: weight,
        value: value
    }
    return newPokemon;
}


while (timeCtr <= 6 && totalWeight < 10) {
    // Functions running through the arrays of predetermined information
    d1(descriptor1);
    d2(descriptor2);
    d3(descriptor3);
    // Functions running through the arrays of predetermined information
    pokeWeight();
    pokeValue();
    indivWeight = pokeWeight();
    indivValue = pokeValue();
    newPokemon = createdPokemon(finishedPokemonName, indivWeight, indivValue);
    // First fish of the game
    console.log(newPokemon)
    console.log("\n");
    let userInput = prompt("Would you like to (c)atch this Pokemon? OR would you like to (r)elease this Pokemon?: ");
    console.log("\n==========================================\n");

    if (userInput === 'c') {
        if (totalWeight + newPokemon.weight > 10) {
            console.log('\n===You cannot catch this Pokemon because it will put you over your weight limit!. Pokemon must be (r)eleased in order to try again !!===\n')
            console.log(`Your total weight is: ${totalWeight} lbs. Your total value is: $${totalValue}`);
            console.log("\n");
            timeCtr++
            console.log(`The time is ${timeCtr}:00 pm`);
            continue;
        }
        pokemonKept.push(newPokemon.name);
        totalValue += newPokemon.value;
        totalWeight += newPokemon.weight;
        console.log('Alright ! Good catch !, lets keep hunting !');
        console.log("\n==========================================\n");
    }
    if (userInput === 'c' && timeCtr === 4) {
        console.log("This is your last turn, make it count !!!!")
    }
    
    if (userInput === 'r') {
        console.log('\n===== Wild Pokemon has fled away !! =====\n')
        console.log(`The time is ${timeCtr} pm`);
        console.log("\n");
        let userInput2 = prompt("Would you like to use (l)ure for the next Pokemon? (Press (l) to use lure, or (n) to not use lure): ");
        console.log("\n");
        if (userInput2 === 'l') {
            d1(descriptor1);
            d2(descriptor2);
            d3(descriptor3);
            pokeWeight();
            pokeValue();
            indivWeight = pokeWeight();
            indivValue = pokeValue();
            newPokemon = createdPokemon(finishedPokemonName, indivWeight, indivValue);
            console.log('Good choice, a better Pokemon will come around!');
            console.log("\n");
            console.log("\n==========================================\n");
            console.log("'Some time later...'");
            console.log("\n==========================================\n");
            console.log("\n");
            timeCtr += .5;
            console.log(`The time is ${timeCtr} pm`);
            console.log("\n");
            console.log(newPokemon); 
            console.log("\n");
            console.log(`Whoa! a new Pokemon just popped out of the wilderness !!`)
            console.log("\n");
            userInput = prompt("Would you like to (c)atch this Pokemon? OR would you like to (r)elease this Pokemon?: ");

            if (userInput === 'c') {
                 d1(descriptor1);
                 d2(descriptor2);
                 d3(descriptor3);
                 pokeWeight();
                 pokeValue();
                 indivWeight = pokeWeight();
                 indivValue = pokeValue();
                 newPokemon = createdPokemon(finishedPokemonName, indivWeight, indivValue);
                pokemonKept.push(newPokemon.name);
                totalValue += newPokemon.value;
                totalWeight += newPokemon.weight;
            } else if (userInput === 'r') {
                console.log('\n===== Wild Pokemon has fled away !! =====\n')
            }
        }
        else if (userInput2 === 'n') {
            //  might not need
            timeCtr++;
            console.log("\n");
            console.log(`The time is ${timeCtr} pm`);
            console.log('\n');
            console.log(`Your total weight is: ${totalWeight} lbs. Your total value is: $${totalValue}`);
            console.log('\n');
            finishedPokemonName = '';
            continue;
            
        } 
    }


    timeCtr++;
    console.log("\n");
    console.log(`The time is ${timeCtr} pm`);
    console.log('\n');
    console.log(`Your total weight is: ${totalWeight} lbs. Your total value is: $${totalValue}`);
    console.log('\n');
    finishedPokemonName = '';

}


// Once the game is done stuff
console.log("\n");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("\n");
console.log(`Pokemon you've caught: ${pokemonKept}`);
console.log("\n");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("GAME OVER");
console.log("\n");