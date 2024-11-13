import chalk from "chalk";
import { displayStatus } from "./Rogue.js";
import { spawnMonster } from "./SpawnMonster.js";
import readlineSync from 'readline-sync';

export const battle = async (stage, player) => {
    let logs = [];

    const monster = spawnMonster(stage);

    while (player.CurHP > 0 || monster.HP > 0) 
    {
        if(player.CurHP <= 0) 
        {
            console.log(chalk.red('플레이어가 사망했습니다.. 게임을 종료합니다.'));
            process.exit(0);
        }
        else if (monster.HP <= 0) break;

        console.clear();
        console.log(monster.TYPE === 'Normal' ? chalk.green(`[ 일반 스테이지 ${stage}]`) :
                            chalk.red(`[ 보스 스테이지 ${stage}]`));
        displayStatus(stage, player, monster);

        logs.forEach((log) => console.log(log));

        console.log(
            chalk.green(
                `\n1. 공격   2. 회피(35%)`,
            ),
        );
        battleInput(logs, player, monster);        
    }
};

function battleInput(logs, player, monster)
{
    let pDamage, mDamage;
    const choice = readlineSync.question('Enter : ');
    switch(choice)
    {
        case '1' :
            //플레이어 공격 처리 
            pDamage = player.Attack();
            logs.push(chalk.green(`공격 : ${pDamage.message}`));
            logs.push(monster.Mon_Hitted(pDamage.damage));

            //이후 몬스터 공격 진행
            setTimeout(()=> {
                mDamage = monster.Mon_Attack();
                logs.push(mDamage.message);
                player.Hitted(mDamage.damage);
            }, 1000)
            break;

        case '2' :
            mDamage = monster.Mon_Attack();
            logs.push(chalk.green(`회피 : ${player.Dodge(mDamage.damage)}`));
            break;

        default:
            console.log(chalk.red("잘못된 입력입니다."));
            battleInput(logs, player, monster);
    }
}