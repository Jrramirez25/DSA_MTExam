// It generates a random number betwween 1 to 1000
let theFavNumber =
Math.floor(Math.random() *1000) + 1;
// It declares a variables to store the user's guess and a boolean to check the guess if correct number
let guess;
let correct = false;
// It use a while loop to repeat the prompt the user for guessing until they guess the correct number
while (correct) {
    guess = parseInt(prompt("Guess my favorite number between 1 and 1000):"));
// It checks if the user's input's number
    if (NaN(guess)) {
        console.log("Invalid input.Please enter a number.");
    } else if (guess < theFavNumber) {
        console.log("Too low");
    } else if (guess < theFavNumber) {
        console.log("Too high");
    } else {
        correct = true;
        console.log("Correct My favorite number is " + theFavNumber + ".");
    }
}