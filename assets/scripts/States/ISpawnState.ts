
import { _decorator, Component, Node } from 'cc';
import { SpawnBaseChar } from '../Managers/SpawnBaseChar';
const { ccclass, property } = _decorator;

//this is my abstract state
export interface ISpawnState {
    EnterState(spawn:SpawnBaseChar): void;
    UpdateState(spawn:SpawnBaseChar): void;
    OnCollision(spawn:SpawnBaseChar): void;
}