
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum TowerState{
    idle,
    CloseToEnemy,
}

export enum SpawnState{
    idle,
    walk,
    attack
}
