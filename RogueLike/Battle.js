import chalk from "chalk";
import { displayStatus } from "./Rogue.js";
import { spawnMonster } from "./SpawnMonster.js";
import readlineSync from 'readline-sync';

const ParringSide = chalk.white(`
    [1. 좌 상단] [2. 중 상단] [3. 우 상단]\n
    [4. 좌 중단] [5. 중 중단] [6. 우 중단]\n
    [7. 좌 하단] [8. 중 하단] [9. 우 하단]`);

export const battle = async (stage, player) => {
    let logs = [];
    const monster = spawnMonster(stage);

    while (player.CurHP > 0 || monster.HP > 0) {                
        console.clear();
        displayStatus(stage, player, monster);
        logs.forEach((log) => console.log(log));

        console.log(
            chalk.green(
                `\n1. 공격   2. 회피(35%) ${monster.TYPE==='Boss'? '3. 패링! ' : ''}`,
            ),
        );
        battleInput(logs, player, monster, stage);

        if (player.CurHP <= 0) {
            console.log(chalk.red('플레이어가 사망했습니다.. 게임을 종료합니다.'));
            process.exit(0);
        }
        else if (monster.HP <= 0) break;
    }
};

function battleInput(logs, player, monster, stage) {
    let pDamage, mDamage;
    const choice = readlineSync.question('Enter : ');
    switch (choice) 
    {
        case '1':
            //플레이어 공격 처리 
            pDamage = player.Attack();
            logs.push(chalk.green(`공격 : ${pDamage.message}`));
            logs.push(monster.Mon_Hitted(pDamage.damage));

            //이후 몬스터 공격 진행
            // setTimeout(()=> {}, 1000)
            mDamage = monster.Mon_Attack();
            logs.push(mDamage.message);
            player.Hitted(mDamage.damage);
            break;

        case '2':
            mDamage = monster.Mon_Attack();
            logs.push(chalk.green(`회피 : ${player.Dodge(mDamage.damage)}`));
            break;
        
        case '3':
            if(monster.TYPE !== 'Boss')
            {
                console.log(chalk.red("잘못된 입력입니다."));
                battleInput(logs, player, monster);
            }
            else
            {
                console.clear();
                displayStatus(stage, player, monster);
                console.log(ParringSide);
                const pChoice = readlineSync.question('Enter : ');
                ParringChoice(pChoice);
                break;
            }

        default:
            console.log(chalk.red("잘못된 입력입니다."));
            battleInput(logs, player, monster, stage);
    }
}

function ParringChoice(pChoice)
{
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    if(pChoice === randomNumber)
    {
        return {
            isParring : true,
            message : chalk.blue('패링에 성공했습니다! 공격을 한턴 더 진행합니다.')
        }
    }
    else
    {
        return {
            isParring : false,
            message : chalk.blue('패링에 실패했습니다.. 데미지를 추가적으로 받습니다.')
        }
    } 
}