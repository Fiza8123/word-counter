// /**
//  * Function to count the number of words in a given string.
//  * @param text - The input string to count words from.
//  * @returns The number of words in the input string.
//  */
// function countWords(text: string): number {
//     // Use a regular expression to match words
//     const words = text.trim().match(/\b\w+\b/g);
//     // Return the number of words or 0 if there are no words
//     return words ? words.length : 0;
// }

// // Example usage:
// const exampleText = "Hello, this is an example string to count words!";
// const wordCount = countWords(exampleText);
// console.log(`Word count: ${wordCount}`);


//importion inquirer and chalk package:
import inquirer from "inquirer";
import chalk from"chalk";

// display colorfull welcome message:

console.log(chalk.bold.cyanBright("\n \t\t **WORD_COUNTER**"));
console.log("=".repeat(60));

//prompt the user to inter the sentence
let ans = await inquirer.prompt([
    {
        name :"sentence",
        type :"input",
        message :"ENTER A SENTENCE",
    }
])

//trimming the sentences

let words = ans.sentence.trim().split(" ");

//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence word:"));
console.log(words);
console.log(chalk.bold(`\n - word count:  ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
