
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

//this is my abstract state
export interface ISpawnState {
    EnterState(): void;
    UpdateState(): void;
    OnCollision(): void;
}