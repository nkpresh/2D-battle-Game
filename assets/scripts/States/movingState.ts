import { _decorator, Component, Node } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Spawns/SpawnBase';
import { ISpawnState } from './ISpawnState';
const { ccclass, property } = _decorator;

export class MovingState extends ISpawnState{

    UpdateState(spawn: SpawnBase) {
        BattleManager.instance.CreateTarget(spawn);
        spawn.MoveToward(spawn.targetLocation)
    }
    OnCollision(spawn: SpawnBase) {
        
    }
}