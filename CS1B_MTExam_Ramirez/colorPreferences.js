// It creates an empty array to store the favorite color of the user
let favoriteColors = [];
// it is use for loop to prompt the user for their favorite colors three times
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter your favorite color:");
    favoriteColors.push(color);
    console.log("Updated list of favorite colors:", favoriteColors);
}