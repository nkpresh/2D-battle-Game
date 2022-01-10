import { _decorator, Component, Node } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { IEntityState } from './IEntityState';
const { ccclass, property } = _decorator;

export class AttackingState extends IEntityState{

    UpdateState(entity: LivingEntity):void{
        
    }
    UpdateAttackState(spawn: LivingEntity, spawnToAttack: LivingEntity) {
        spawn.Attack(spawnToAttack);
    }

    OnCollision(spawn: LivingEntity): void {
        
    }
}