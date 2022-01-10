
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
const { ccclass, property } = _decorator;

//this is my abstract state
export abstract class ISpawnState {
    
    EnterState(spawn: SpawnBase) {
        spawn.currentState = this
    }
    abstract UpdateState(spawn:SpawnBase);
    abstract OnCollision(spawn: SpawnBase);
    SwitchState(spawn: SpawnBase, newState: ISpawnState) {
        newState.EnterState(spawn);
    }
} {
    
}