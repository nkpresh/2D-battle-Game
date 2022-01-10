import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class AttackingState extends ISpawnState{

    UpdateState(spawn: SpawnBase):void{
        
    }
    UpdateAttackState(spawn: SpawnBase, spawnToAttack: SpawnBase) {
        spawn.Attack(spawnToAttack);
    }

    OnCollision(spawn: SpawnBase): void {
        
    }
}