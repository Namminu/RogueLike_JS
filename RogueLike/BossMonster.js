import { Monster } from "./Monster"
import chalk from 'chalk';

export class BossMonster extends Monster
{
    constructor(name, hp, atk, exp, def)
    {
        super(name, hp, atk, exp);
        this._DEF = def;
    }
// ----------------------------------------------------------------------
    Mon_Hitted(hit_damage)
    {
        this._HP -= (hit_damage * ((100 - this._DEF)/100));
    }
// ----------------------------------------------------------------------
    
}