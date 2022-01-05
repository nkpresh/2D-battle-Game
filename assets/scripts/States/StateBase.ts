
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum TowerState{
    idle,
    Attack,
    spawnning,
    destroyed
}

export enum SpawnState{
    idle,
    moving,
    reachedEnemyTower,
    closeToEnemy,
    dead
}

export enum PlayMode{
    Player,
    AI
}
