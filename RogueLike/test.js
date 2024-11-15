// import readline from 'readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//     // TODO: Log the answer in a database
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });

import readlineSync from 'readline-sync';

export const getInput = (options = {isInitial : true}) => {
    const {isInitial } = options;
    const question = isInitial ? "Enter : " : "Repeat : ";

    const input = readlineSync.question("Enter : ");
    if(!input) return getInput({isInitial : false});
    else return input;
};