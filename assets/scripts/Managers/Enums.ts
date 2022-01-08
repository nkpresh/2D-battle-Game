
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum SpawnState{
    idle,
    moving,
    reachedEnemyTower,
    closeToEnemy,
    dead
}

export enum PlayMode{
    AI,
    Player,
}
