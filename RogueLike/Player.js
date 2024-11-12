import chalk from 'chalk';

export class Player {
    constructor(maxHp, def, atk, doubleAtkRate) {
      this._MaxHP = maxHp;
      this._CurHP = this._MaxHP;
      this._DEF = def;
      this._ATK = atk;
      this._DoubleATKRate = doubleAtkRate;
      this._LEVEL = 1;
      this._EXP = 0;
    }
// ----------------------------------------------------------------------
    //공격 기능
    Attack() 
    {
        if((this._DoubleATKRate/100) > Math.random())
        {
            //연속 공격 진행

        }
        else
        {
            //일반 공격 진행

        }
    }
    //회피 기능
    Dodge(hit_damage)
    {
        if(Math.floor(Math.random()) > 0.5)
        {
            //일정 확률로 회피 성공 + 체력 일정량 회복

            this._CurHP *= 1.2;
        }
        else
        {
            //회피 실패, 피격 발생
            this.Hitted(hit_damage);
        }
    }
    //피격 기능
    Hitted(hit_damage)
    {
        this._CurHP -= (hit_damage * ((100 - this._DEF)/100));
    }
    //레벨업 기능
    LevelUp() 
    { 
        this._LEVEL++;
        this._MaxHP *= 1.2;
        this._CurHP = this._MaxHP;
        this._ATK += Math.floor(Math.random() * 10);
        this._DoubleATKRate += Math.floor(Math.random() * 10);
        this._DEF += Math.floor(Math.random() * 10);
        this._EXP = 0;
    }
// ----------------------------------------------------------------------
    get MaxHP() { return this._MaxHP; }
    get CurHP() { return this._CurHP; }
    get DEF() { return this._DEF; }
    get ATK() { return this._ATK; }
    get DoubleATKRate() { return this._DoubleATKRate; }
    get EXP() { return this._EXP; }

    set MaxHP(value) { this._MaxHP = value; }
    set CurHP(value) { this._CurHP = value; }
    set DEF(value) { this._DEF = value; }
    set ATK(value) { this._ATK = value; }
    set _DoubleATKRate(value) { this._DoubleATKRate = value; }
    set EXP(value) 
    { 
        this._EXP += value; 
        if(this._EXP >= 100)
        {
            this.LevelUp();
            console.log(chalk.yellow("Player LEVEL UP! : " + this._LEVEL));
            console.log(chalk.yellow("플레이어 능력이 일정량 증가합니다."));
        }
    }
}