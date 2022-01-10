import { _decorator, Component, Node } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
import { LivingEntity } from '../Components/LivingEntity';
const { ccclass, property } = _decorator;

export class MovingState extends ISpawnState{

    UpdateState(spawn: SpawnBase) {
        BattleManager.instance.CreateTarget(spawn);
        spawn.MoveToward(spawn.target)
    }
    OnCollision(spawn: LivingEntity) {
        
    }

    EnemyInRange(spawn: LivingEntity, enemy: LivingEntity):boolean {
        if (true) {
            
        }
            return true;
    }
}