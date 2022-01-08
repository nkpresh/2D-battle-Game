import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class MovingState implements ISpawnState{

    EnterState(spawn: SpawnBase): void {
        
    }
    UpdateState(spawn: SpawnBase): void {
        
    }
    OnCollision(spawn: SpawnBase): void {
        
    }
}