// import readline from 'readline';
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });

// import readlineSync from 'readline-sync';

// export const getInput = (options = {isInitial : true}) => {
//     const {isInitial } = options;
//     const question = isInitial ? "Enter : " : "Repeat : ";

//     const input = readlineSync.question("Enter : ");
//     if(!input) return getInput({isInitial : false});
//     else return input;
// };


    //const choice = readlineSync.question('Enter: ');
    // //const choice = getInput();
    // switch (choice) {
    //     case '1':
    //         console.log(chalk.green('게임을 시작합니다.'));
    //         // 여기에서 새로운 게임 시작 로직을 구현
    //         await startGame();
    //         break;
    //     case '2':
    //         console.log(chalk.yellow('구현 준비중입니다.. 게임을 시작하세요'));
    //         // 업적 확인하기 로직을 구현
    //         handleUserInput();
    //         break;
    //     case '3':
    //         console.log(chalk.blue('구현 준비중입니다.. 게임을 시작하세요'));
    //         // 옵션 메뉴 로직을 구현
    //         handleUserInput();
    //         break;
    //     case '4':
    //         console.log(chalk.red('게임을 종료합니다.'));
    //         // 게임 종료 로직을 구현
    //         process.exit(0); // 게임 종료
    //         break;
    //     default:
    //         console.log(chalk.red('올바른 선택을 하세요.'));
    //         handleUserInput(); // 유효하지 않은 입력일 경우 다시 입력 받음
    // }