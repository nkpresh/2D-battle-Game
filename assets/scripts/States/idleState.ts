import { _decorator, Component, Node } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { EntityState } from './IEntityState';
const { ccclass, property } = _decorator;

export class IdleState extends EntityState{

    UpdateState(spawn: LivingEntity): void {
        
    }
    OnCollision(spawn: LivingEntity): void {
        
    }
}