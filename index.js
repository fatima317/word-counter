#! /usr/bin/env node
import inquirer from "inquirer";
const anwsers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ",
    },
]);
const words = anwsers.Sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
