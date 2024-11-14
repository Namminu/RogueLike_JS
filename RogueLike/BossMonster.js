import { Monster } from "./Monster.js"
import chalk from 'chalk';

export class BossMonster extends Monster
{
    constructor(name, hp, atk, exp, type, def)
    {
        super(name, hp, atk, exp, type);
        this._DEF = def;
    }
// ----------------------------------------------------------------------
    Mon_Hitted(hit_damage)
    {
        const damage = hit_damage * ((100 - this._DEF)/100);
        this._HP -= damage;
        return chalk.blue(`몬스터가 ${damage} 의 피해를 입었습니다.`);
    }
// ----------------------------------------------------------------------
    get DEF() { return this._DEF; }
}