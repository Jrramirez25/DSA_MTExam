// Prompts the users to enter their age and convert into integer
let age = parseInt(prompt("Please enter your age:"));

// It declares a variable to store the age category
let agecategory;

// It is use if else if statemaents bto determine the age category bsed on age of users
if (age < 5) {
    ageCategory = "Toddler";
} else  if (age >= 5 && age <= 12) {
    ageCategory = "Child";
} else if (age >= 13 && age <= 19) {
    ageCategory = "Teemager";
} else if (age >= 20 && age <= 35) {
    ageCategory = "Young Adult";
} else if (age >= 36 && age <= 60) {
    ageCategory = "Middle-Aged";
} else {
    ageCategory = "Senior";
}

// It prints the age category of the user's to the console
console.log("You are categorized as a " + ageCategory + ".");