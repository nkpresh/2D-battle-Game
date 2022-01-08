import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class MovingState implements ISpawnState{

    EnterState(spawn: SpawnBase): void {
        spawn.currentState = this;
    }
    UpdateState(spawn: SpawnBase): void {
        // spawn.MoveToward(s)
    }
    OnCollision(spawn: SpawnBase): void {
        
    }

    SwitchState(spawn: SpawnBase, newState: ISpawnState): void {
        
    }
}