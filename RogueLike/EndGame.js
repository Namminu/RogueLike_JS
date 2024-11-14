import chalk from 'chalk';
import { displayLobby } from './Server.js';
import fs from 'fs';

export function EndGame()
{
    const data = fs.readFileSync('EndGameMessage.json', 'utf-8');
    const messages = JSON.parse(data);    

    let m_Id = 1;
    while(m_Id <= messages.length)
    {
        console.clear();
        const messageObj = messages.find(message => messages.id === m_Id);
        console.log(chalk.white(messageObj));

        if(m_Id === 6) choiceExitOrMore(messages, m_Id);
        readlineSync.question(chalk.gray('\n Enter Any Key ...'));
        m_Id++;
    }
}

function choiceExitOrMore(messages, id)
{
    console.log(chalk.magentaBright(`\n1. 좋아. 2. 그만 할래`));
    const choice = readlineSync.question(chalk.gray('Enter : '));   
    id+=choice;
    let messageObj;

    switch (choice)
    {
        case '1':
            console.clear();
            messageObj = messages.find(message => messages.id === id);
            console.log(chalk.white(messageObj));
            process.exit(0);

        case '2':
            console.clear();
            messageObj = messages.find(message => messages.id === id);
            console.log(chalk.white(messageObj));
            readlineSync.question(chalk.gray('Start : '));
            displayLobby();
            break;

        default:
            console.log(chalk.white("뭐라고? 제대로 못들었어."));
            choiceExitOrMore();
    }
}