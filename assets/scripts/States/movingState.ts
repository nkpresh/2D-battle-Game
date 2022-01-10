import { _decorator, Component, Node } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { IEntityState } from './IEntityState';
import { LivingEntity } from '../Components/LivingEntity';
const { ccclass, property } = _decorator;

export class MovingState extends IEntityState{

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