import { _decorator, Component, Node } from 'cc';
import { SpawnBaseChar } from '../Managers/SpawnBaseChar';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class MovingState implements ISpawnState{

    EnterState(spawn: SpawnBaseChar): void {
        throw new Error('Method not implemented.');
    }
    UpdateState(spawn: SpawnBaseChar): void {
        throw new Error('Method not implemented.');
    }
    OnCollision(spawn: SpawnBaseChar): void {
        throw new Error('Method not implemented.');
    }
}