
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { SpawnState } from '../Managers/Enums';
const { ccclass, property } = _decorator;

export interface ISpawnState {
    EnterState(): void;
    UpdateState(): void;
    OnCollision(): void;
}