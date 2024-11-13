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
        this._HP -= (hit_damage * ((100 - this._DEF)/100));
    }
// ----------------------------------------------------------------------
    get DEF() { return this._DEF; }
}