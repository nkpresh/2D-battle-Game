
import { _decorator, Component, Node, Vec2, Vec3, systemEvent, System, SystemEvent, EventKeyboard, KeyCode, resources, Prefab, instantiate, tween } from 'cc';
import { BattleManager } from '../../Managers/BattleManager';
import { MoveTowards } from '../../Managers/Helper';
import { PlayMode, SpawnState } from '../../States/Enums';
import { Tower } from '../Tower';
const { ccclass, property } = _decorator;

@ccclass('SpawnBase')
export class SpawnBase extends Component {

    maxHp: number;
    minHp: number;
    currentHp: number;

    prefabLocation: string= "Prefabs/Spawns/cyberElephant";
    movementSpeed: number = 200;
    startLocation: Vec3;
    currentLocation: Vec3;
    targetLocation: Vec3;

    playMode: PlayMode;
    
    enemyTower: Tower;

    spawnState: SpawnState;

    start() {
        
    }

    update(deltaTime: number) {
        if (this.spawnState == SpawnState.moving) {
            this.Move(deltaTime);
        }
        
    }

    Move(deltaTime: number) {
        this.startLocation = this.node.worldPosition.clone();
        this.currentLocation = this.node.worldPosition.clone();
        this.targetLocation = this.enemyTower.spawnInitialPos.worldPosition.clone();
        this.currentLocation = MoveTowards(this.currentLocation, this.targetLocation, this.movementSpeed * deltaTime);
        this.node.setWorldPosition(this.currentLocation);
        let dist = Vec3.distance(this.currentLocation, this.targetLocation);
        if (dist<20) {
            this.spawnState = SpawnState.reachedEnemyTower;
        }

    }

    MoveToTarget(targetPos: Vec3) {
        if (this.spawnState == SpawnState.moving) {
            this.targetLocation = targetPos;
        }
        
    }

    AttackEnemy(enemySpawn: SpawnBase) {
        
    }

    AttackTower() {
        
    }

    
}
