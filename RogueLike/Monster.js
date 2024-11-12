import chalk from 'chalk';

export class Monster {
    constructor(name, hp, atk, exp) 
    {
        this._NAME = name;
        this._HP = hp;
        this._ATK = atk;
        this._EXP = exp;
    }
// ----------------------------------------------------------------------
    Mon_Attack(player)
    {
        //player.Hitted(this._ATK);
    }
    Mon_Hitted(hit_damage)
    {
        this._HP -= hit_damage;
    }
    Mon_Die()
    {

    }

// ----------------------------------------------------------------------
    get NAME() { return this._NAME; }
    get HP() { return this._HP; }
    get ATK() { return this._ATK; }
    get EXP() { return this._EXP; }

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