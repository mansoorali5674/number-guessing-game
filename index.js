console.log(" guess a number between 1 to 15");
//creating variables
let a = Math.floor(Math.random() * 15);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "enter your guess number" });
    //code for given number
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratulation your guess number is correct");
        break;
    }
    else {
        console.log("Sorry try again");
    }
}
