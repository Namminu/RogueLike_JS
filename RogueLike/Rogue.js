import chalk from 'chalk';
import { Player } from './Player.js';
import { battle } from './Battle.js';
import readlineSync from 'readline-sync';

export function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`=== Current Status ===`));
  console.log(chalk.cyanBright(`| Stage: ${stage} `));
  console.log(chalk.blueBright(`| 플레이어 정보 | LEVEL : ${player.LEVEL} HP : ${player.CurHP} DEF : ${player.DEF}`,));
  if (monster.TYPE==='Normal') console.log(chalk.redBright(`| 일반 몬스터 정보 | NAME : ${monster.NAME} HP : ${monster.HP} ATK : ${monster.ATK}`,));
  else console.log(chalk.redBright(`| 보스 몬스터 정보 | NAME : ${monster.NAME} HP : ${monster.HP} ATK : ${monster.ATK} DEF : ${monster.DEF}`,));
  console.log(chalk.magentaBright(`=====================\n`));
}

export async function startGame() 
{
  console.clear();
  const player = new Player(100, 20, 15, 20);
  let stage = 1;

  while (stage <= 9) 
  {
    await battle(stage, player);
    
    //console.clear();
    console.log(chalk.magentaBright(`${stage} 스테이지를 클리어 했습니다.`));
    console.log(chalk.magentaBright(`1. Continue 2. Stay 3. Exit`));

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
}