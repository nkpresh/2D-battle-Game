
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Managers/SpawnBase';
const { ccclass, property } = _decorator;

//this is my abstract state
export interface ISpawnState {
    EnterState(spawn:SpawnBase): void;
    UpdateState(spawn:SpawnBase): void;
    OnCollision(spawn:SpawnBase): void;
}