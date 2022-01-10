import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class DeadState extends ISpawnState{

    UpdateState(spawn: SpawnBase): void {
        spawn.isDead = true;
    }
    OnCollision(spawn: SpawnBase): void {
        
    }

}