import chalk from 'chalk';
import { Player } from './Player.js';
import { battle } from './Battle.js';
import { EndGame } from './EndGame.js';
import readlineSync from 'readline-sync';

export function displayStatus(stage, player, monster) {
  console.log(monster.TYPE === 'Normal' ? chalk.green(`[ 일반 스테이지 ${stage}]`) 
                                        : chalk.red(`[ 보스 스테이지 ${stage}]`));
  console.log(chalk.magentaBright(`=== Current Status ===`));
  console.log(chalk.cyanBright(`| Stage: ${stage} `));
  console.log(chalk.blueBright(`| 플레이어 정보 | LEVEL : ${player.LEVEL} HP : ${player.CurHP.toFixed(2)} ATK : ${player.ATK} DEF : ${player.DEF} EXP : ${player.EXP/100} %`,));
  if (monster.TYPE==='Normal') console.log(chalk.redBright(`| 일반 몬스터 정보 | NAME : ${monster.NAME} HP : ${monster.HP.toFixed(2)} ATK : ${monster.ATK}`,));
  else console.log(chalk.redBright(`| 보스 몬스터 정보 | NAME : ${monster.NAME} HP : ${monster.HP.toFixed(2)} ATK : ${monster.ATK} DEF : ${monster.DEF}`,));
  console.log(chalk.magentaBright(`=====================\n`));
}

export async function startGame() 
{
  console.clear();
  const player = new Player(100, 20, 15, 20);
  let stage = 10;

  while (stage <= 9) 
  {
    const exp = await battle(stage, player);

    console.clear();
    console.log(chalk.magentaBright(`${stage} 스테이지를 클리어 했습니다.`));
    console.log(chalk.blueBright(`${exp}의 경험치를 획득합니다`));
    player.EXP += exp;

    console.log(chalk.magentaBright(`\n1. Continue 2. Stay 3. Exit`));

    const choice = readlineSync.question('Enter : ');
    switch(choice)
    {
      case '1':
        stage++;
        break;
      case '2':
        break;
      case '3':
        console.log(chalk.red('게임을 종료합니다.'));
        process.exit(0);
      default:
        console.log(chalk.red('잘못된 입력입니다. 게임을 진행합니다.'));
        stage++;
        break;
    }
  }
  console.log(chalk.magentaBright(`모든 스테이지를 클리어 했습니다.`));
  readlineSync.question('\nPress Any Key...');
  EndGame();
}