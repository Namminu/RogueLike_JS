import chalk from 'chalk';
import figlet from 'figlet';
//import readlineSync from 'readline-sync';
import {startGame} from "./Rogue.js";
import readline from 'readline';
const Sv_rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 로비 화면을 출력하는 함수
export function displayLobby() {
    console.clear();

    // 타이틀 텍스트
    console.log(
        chalk.cyan(
            figlet.textSync('Rogue and Soul', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    const line = chalk.magentaBright('='.repeat(50));
    console.log(line);

    console.log(chalk.yellowBright.bold('로그소울 게임에 오신것을 환영합니다!'));

    console.log(chalk.green('옵션을 선택해주세요.'));
    console.log();

    console.log(chalk.blue('1.') + chalk.white(' 새로운 게임 시작'));
    console.log(chalk.blue('2.') + chalk.white(' 업적 확인하기'));
    console.log(chalk.blue('3.') + chalk.white(' 옵션'));
    console.log(chalk.blue('4.') + chalk.white(' 종료'));

    console.log(line);

    console.log(chalk.gray('1-4 사이의 수를 입력한 뒤 엔터를 누르세요.'));
    handleUserInput();
}

async function handleUserInput() {
    Sv_rl.question('Enter : ', async (choice) => {
        switch (choice) {
            case '1':
                console.log(chalk.green('게임을 시작합니다.'));
                await startGame();
                break;
            case '2':
                console.log(chalk.yellow('구현 준비중입니다.. 게임을 시작하세요'));
                handleUserInput();
                break;
            case '3':
                console.log(chalk.blue('구현 준비중입니다.. 게임을 시작하세요'));
                handleUserInput();
                break;
            case '4':
                console.log(chalk.red('게임을 종료합니다.'));
                process.exit(0); 
            default:
                console.log(chalk.red('올바른 선택을 하세요.'));
                handleUserInput(); 
        }
        Sv_rl.close();
      });
}

export async function start() {
    displayLobby();
    //await handleUserInput();
}

start();