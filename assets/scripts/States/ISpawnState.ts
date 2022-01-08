
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export interface ISpawnState {
    EnterState(): void;
    UpdateState(): void;
    OnCollision(): void;
}