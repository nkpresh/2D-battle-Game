import { _decorator, Component, Node } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { IEntityState } from './IEntityState';
const { ccclass, property } = _decorator;

export class DeadState extends IEntityState{

    UpdateState(spawn: LivingEntity): void {
        spawn.isDead = true;
    }
    OnCollision(spawn: LivingEntity): void {
        
    }

}