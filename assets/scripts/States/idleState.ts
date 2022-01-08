import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Managers/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class IdleState implements ISpawnState{

    EnterState(spawn: SpawnBase): void {
        throw new Error('Method not implemented.');
    }
    UpdateState(spawn: SpawnBase): void {
        throw new Error('Method not implemented.');
    }
    OnCollision(spawn: SpawnBase): void {
        throw new Error('Method not implemented.');
    }

}