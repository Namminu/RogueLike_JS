import chalk from 'chalk';
import readlineSync from 'readline-sync';
import {Player} from './Player.js';
import {Monster} from './Monster.js';
import { BossMonster } from './BossMonster.js';

function displayStatus(stage, player, monster) {
  console.log(chalk.magentaBright(`\n=== Current Status ===`));
  console.log(chalk.cyanBright(`| Stage: ${stage} `));
    console.log(chalk.blueBright(`| 플레이어 정보 | LEVEL : ${player.LEVEL} HP : ${player.HP} DEF : ${player.DEF}}`,));
    console.log(chalk.redBright(`| 몬스터 정보 |`,));
  console.log(chalk.magentaBright(`=====================\n`));
}

const battle = async (stage, player, monster) => {
  let logs = [];

  while(player.hp > 0) {
    console.clear();
    displayStatus(stage, player, monster);

    logs.forEach((log) => console.log(log));

    console.log(
      chalk.green(
        `\n1. 공격 2. 회피`,
      ),
    );
    const choice = readlineSync.question('Enter : ');

    // 플레이어의 선택에 따라 다음 행동 처리
    logs.push(chalk.green(`${choice}를 선택하셨습니다.`));
  }
  
};

export async function startGame() {
  console.clear();
  const player = new Player();
  let stage = 1;

  while (stage <= 10) {
    const monster = new Monster(stage);
    await battle(stage, player, monster);

    // 스테이지 클리어 및 게임 종료 조건

    stage++;
  }
}