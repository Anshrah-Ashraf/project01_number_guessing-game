#! usr/bin/env/ node
import inquirer from "inquirer";
console.log("Welcome to Number guessing game");
let randomNumber = Math.floor(Math.random() * 5 + 1);
let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Number limit from 1 to 5):",
    },
    {
        type: "confirm",
        name: "Addmore",
        message: "Do you want to continue ?",
        default: false,
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! This is a correct number");
}
else
    [
        console.log("Sorry, you guessed a wrong number")
    ];
