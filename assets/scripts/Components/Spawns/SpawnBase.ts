
import { _decorator, Component, Node, resources, Prefab, instantiate, tween, Vec3, sp, Enum, Contact2DType, BoxCollider2D, PolygonCollider2D, Skeleton, Collider2D, director } from 'cc';
import { PlayMode, SpawnState } from '../../Managers/Enums';
import { MoveTowards } from '../../Managers/Helper';

import { LivingEntity } from '../LivingEntity';

const { ccclass, property } = _decorator;

//this is my Context
Enum(PlayMode)
@ccclass('SpawnBase')
export class SpawnBase extends LivingEntity{


    @property(Node)
    spawnNode: Node;

    prefabLocation: string= "Prefabs/Spawns/cyberElephant";
    movementSpeed: number = 200;
    startLocation: Vec3;
    currentLocation: Vec3;

    playMode: PlayMode;

    spawnState: SpawnState;

    isDead: boolean = false;
    
    start() {
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
        this.currentLocation = MoveTowards(this.currentLocation, this.target, this.movementSpeed * deltaTime);
        this.node.setWorldPosition(this.currentLocation);
        let dist = Vec3.distance(this.currentLocation, this.target);
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
        this.target = targetPos.clone();
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
}