import chalk from "chalk";
import { start } from "./Server.js";
import fs from "fs";
//import readlineSync from 'readline-sync';
import readline from 'readline';
const End_rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


export async function EndGame() 
{
  const data = fs.readFileSync("EndGameMessage.json", "utf-8");
  const messages = JSON.parse(data);

  let m_Id = 1;
  while (m_Id <= messages.length) {
    console.clear();
    const messageObj = messages.find((message) => message.id === m_Id);
    console.log(chalk.white(messageObj.message));

    if (m_Id === 6) choiceExitOrMore(messages, m_Id);
    //readlineSync.question(chalk.gray("\n Press Enter ..."));
    End_rl.question('\nPress Enter...', (enter) => {
      End_rl.close();
    });
    m_Id++;
  }
}

function choiceExitOrMore(messages, id) 
{
  console.log(chalk.magentaBright(`\n1. 좋아. 2. 그만 할래`));
  //const choice = readlineSync.question(chalk.gray("Enter : "));
  // switch (choice) {
  //   case "1":
  //     console.clear();
  //     messageObj = messages.find((message) => message.id === id + 2);
  //     console.log(chalk.white(messageObj.message));
  //     readlineSync.question(chalk.gray("\nStart!"));
  //     start();
  //     break;
  //   case "2":
  //     console.clear();
  //     messageObj = messages.find((message) => message.id === id + 1);
  //     console.log(chalk.white(messageObj.message));
  //     process.exit(0);
  //   default:
  //     console.clear();
  //     console.log(chalk.white("뭐라고? 제대로 못들었어."));
  //     choiceExitOrMore();
  // }

  End_rl.question('\nEnter : ', (choice) => {
  switch (choice) {
    case "1":
      console.clear();
      messageObj = messages.find((message) => message.id === id + 2);
      console.log(chalk.white(messageObj.message));
      //readlineSync.question(chalk.gray("\nStart!"));
      End_rl.question('\nnStart!', (start) => {
        End_rl.close();
      });
      start();
      break;

    case "2":
      console.clear();
      messageObj = messages.find((message) => message.id === id + 1);
      console.log(chalk.white(messageObj.message));
      process.exit(0);

    default:
      console.clear();
      console.log(chalk.white("뭐라고? 제대로 못들었어."));
      choiceExitOrMore();
  }
    End_rl.close();
  });
  let messageObj;
}
