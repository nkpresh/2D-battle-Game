
import { _decorator, Component, Node, resources, Prefab, instantiate, tween, Vec3, sp, Enum, Contact2DType, BoxCollider2D, PolygonCollider2D, Skeleton, Collider2D, director } from 'cc';
import { HealthSystem } from '../HealthSystem';
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
    
    @property(HealthSystem)
    spawnHealth: HealthSystem;

    @property(Node)
    spawnNode: Node;

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
        
        // if (this.node.hasEventListener("",this.onBeginContact,this.node)) {
        //     console.log("touched");
        //    
        let collider = this.getComponent(PolygonCollider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, () => {
                this.onBeginContact()
            }, this);
        }
        this.init();
        
    }
    init() {
        this.movingState.EnterState(this);
        this.movingState.UpdateState(this);
    }

    update(deltaTime: number) {

        if (this.currentState == this.movingState)
            this.Move(deltaTime)
    }

    onBeginContact() {
        console.log("Reached");
    }

    Move(deltaTime: number) {
        this.startLocation = this.node.worldPosition.clone();
        this.currentLocation = this.node.worldPosition.clone();
        this.currentLocation = MoveTowards(this.currentLocation, this.targetLocation, this.movementSpeed * deltaTime);
        this.node.setWorldPosition(this.currentLocation);
        let dist = Vec3.distance(this.currentLocation, this.targetLocation);
        if (dist<20) {
            this.currentState.SwitchState(this,this.attackingState)
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
    Attack(spawnToAttack: SpawnBase) {
        if (spawnToAttack.isDead) {
            this.currentState.SwitchState(this, this.idleState);
            return;
        }
        if (this.spawnHealth.currentHp<=this.spawnHealth.minHp) {
            this.currentState.SwitchState(this, this.deadState)
        }
        let amount=Math.floor(Math.random() * (20 - 5 + 4) + 5);
        spawnToAttack.spawnHealth.ReduceHealth(amount);
    }

    CloseToEnemy
}
