
import { _decorator, Component, Node, Vec2, Vec3, systemEvent, System, SystemEvent, EventKeyboard, KeyCode } from 'cc';
import { BattleManager } from '../../Managers/BattleManager';
import { MoveTowards } from '../../Managers/Helper';
import { SpawnState } from '../../States/Enums';
const { ccclass, property } = _decorator;

@ccclass('SpawnBase')
export class SpawnBase extends Component {

    prefabLocation: string= "Prefabs/Spawns/cyberElephant";

    movementSpeed: number = 200;

    startLocation: Vec3;
    currentLocation: Vec3;
    targetLocation: Vec3;

    // @property(Node)
    enemyTower: Node;

    spawnState: SpawnState;

    start() {
        this.spawnState = SpawnState.idle;
        console.log(this.spawnState);
        this.enemyTower = BattleManager.instance.aiTower.node;
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, ((event:EventKeyboard) => {
            if (event.keyCode == KeyCode.KEY_A) {
                this.spawnState = SpawnState.moving;
            }
        }),this)
    }

    update(deltaTime: number) {
        if (this.spawnState == SpawnState.moving) {
            // console.log("toached")
        }
        this.Move(deltaTime);
    }

    Move(deltaTime:number) {
        if (this.spawnState == SpawnState.moving) {
            this.startLocation = this.node.worldPosition.clone();
            this.currentLocation = this.node.worldPosition.clone();
            this.targetLocation = this.enemyTower.worldPosition.clone();
            this.currentLocation = MoveTowards(this.currentLocation, this.targetLocation, this.movementSpeed * deltaTime);
            this.node.setWorldPosition(this.currentLocation);
            let dist = Vec3.distance(this.currentLocation, this.targetLocation);
            if (dist<20) {
                this.spawnState = SpawnState.reachedEnemyTower;
            }
        }
    }
}
