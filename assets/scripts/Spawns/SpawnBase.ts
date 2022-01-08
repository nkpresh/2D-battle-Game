
import { _decorator, Component, Node, resources, Prefab, instantiate, tween, Vec3, sp, Enum } from 'cc';
import { PlayMode, SpawnState } from '../Managers/Enums';
import { MoveTowards } from '../Managers/Helper';
import { AttackingState } from '../States/AttackingState';
import { DeadState } from '../States/DeadState';
import { IdleState } from '../States/IdleState';
import { ISpawnState } from '../States/ISpawnState';
import { MovingState } from '../States/MovingState';
const { ccclass, property } = _decorator;

//this is my Context
Enum(PlayMode)
@ccclass('SpawnBase')
export class SpawnBase extends Component{

    @property({ type: PlayMode })
    spawnControl: PlayMode;

    maxHp: number;
    minHp: number;
    currentHp: number;

    currentState: ISpawnState;
    idleState: ISpawnState = new IdleState();
    movingState: ISpawnState = new MovingState();
    attackingState: ISpawnState = new AttackingState();
    deadState: ISpawnState = new DeadState();

    prefabLocation: string= "Prefabs/Spawns/cyberElephant";
    movementSpeed: number = 200;
    startLocation: Vec3;
    currentLocation: Vec3;
    targetLocation: Vec3;

    playMode: PlayMode;

    spawnState: SpawnState;

    isDead: boolean = false;
    
    start() {
        this.init();
    }
    init() {
        this.currentState = this.idleState;
        this.currentState.EnterState(this);
    }

    update(deltaTime: number) {
        if (this.currentState == this.movingState)
            this.Move(deltaTime)
    }

    Move(deltaTime: number) {
        this.startLocation = this.node.worldPosition.clone();
        this.currentLocation = this.node.worldPosition.clone();
        this.currentLocation = MoveTowards(this.currentLocation, this.targetLocation, this.movementSpeed * deltaTime);
        this.node.setWorldPosition(this.currentLocation);
        let dist = Vec3.distance(this.currentLocation, this.targetLocation);
        if (dist<20) {
            
        }

    }

    MoveToward(targetPos: Vec3) {
        if (this.isDead == true) {
            this.deadState.EnterState(this);
            return;
        }
        if (this.currentState !== this.movingState) {
            return;
        }
        this.targetLocation = targetPos.clone();
    }
}
