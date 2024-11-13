import {Monster} from './Monster.js';
import { BossMonster } from './BossMonster.js';
import fs from 'fs';

function loadMonsters(currentStage)
{
    const data = fs.readFileSync('monster.json', 'utf-8');
    const monsters = JSON.parse(data);    

    return monsters.find(monster => monster.stage === currentStage);
}

export function spawnMonster(currentStage)
{
    const loadMemory = loadMonsters(currentStage);
    const monster = loadMemory.type === "Normal" ? 
         new Monster(loadMemory.name, loadMemory.hp, loadMemory.atk, loadMemory.exp, loadMemory.type)
        : new BossMonster(loadMemory.name, loadMemory.hp, loadMemory.atk, loadMemory.exp, loadMemory.type, loadMemory.def);
    
    return monster;
}