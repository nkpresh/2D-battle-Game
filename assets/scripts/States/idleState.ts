import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class IdleState extends ISpawnState{

    UpdateState(spawn: SpawnBase): void {
        
    }
    OnCollision(spawn: SpawnBase): void {
        
    }
}