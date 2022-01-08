
import { _decorator, Component, Node, resources, Prefab, instantiate, tween, Vec3, sp } from 'cc';
import { AttackingState } from '../States/AttackingState';
import { DeadState } from '../States/DeadState';
import { IdleState } from '../States/IdleState';
import { ISpawnState } from '../States/ISpawnState';
import { MovingState } from '../States/MovingState';
const { ccclass, property } = _decorator;

//this is my Context
@ccclass('SpawnStateHandler')
export class SpawnBaseChar extends Component{

    currentState: ISpawnState;
    idleState: ISpawnState = new IdleState();
    movingState: ISpawnState = new MovingState();
    attackingState: ISpawnState = new AttackingState();
    deadState: ISpawnState = new DeadState();

    cybderSpawn
    start() {
        this.currentState = this.idleState;
        this.currentState.EnterState(this);
        
    }

    update(deltaTime: number) {
        
    }
}
