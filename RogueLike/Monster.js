import chalk from 'chalk';

export class Monster {
    constructor(name, hp, atk, exp, type) 
    {
        this._NAME = name;
        this._HP = hp;
        this._ATK = atk;
        this._EXP = exp;
        this._TYPE = type;
    }
// ----------------------------------------------------------------------
    Mon_Attack()
    {
        return {
            damage : this._ATK,
            message : chalk.red(`몬스터가 ${this._ATK} 의 공격을 합니다.`)
        }
    }
    Mon_Hitted(hit_damage)
    {
        this._HP -= hit_damage;
        return chalk.blue(`몬스터가 ${hit_damage} 의 피해를 입었습니다.`);
    }

// ----------------------------------------------------------------------
    get NAME() { return this._NAME; }
    get HP() { return this._HP; }
    get ATK() { return this._ATK; }
    get EXP() { return this._EXP; }
    get TYPE() { return this._TYPE; }

    set NAME(value)
    {
        if(typeof value !== 'string')
        {
            console.log(`${this._NAME} : Type Error`);
            process.exit(0);
        }
        this._NAME = value;
    }
    set HP(value) { this._HP = value; }
}