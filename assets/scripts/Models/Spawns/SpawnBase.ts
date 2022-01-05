
import { _decorator, Component, Node, Vec2, Vec3, systemEvent, System, SystemEvent, EventKeyboard, KeyCode } from 'cc';
import { MoveTowards } from '../../Managers/Helper';
import { SpawnState } from '../../States/StateBase';
const { ccclass, property } = _decorator;

@ccclass('SpawnBase')
export class SpawnBase extends Component {

    movementSpeed: number = 200;

    startLocation: Vec3;
    currentLocation: Vec3;
    targetLocation: Vec3;

    @property(Node)
    enemyTower: Node;

    spawnState: SpawnState;

    start () {
        this.spawnState = SpawnState.idle;
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, ((event:EventKeyboard) => {
            if (event.keyCode == KeyCode.KEY_A) {
                this.spawnState = SpawnState.moving;
            }
        }),this)
    }

    update (deltaTime: number) {
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
            if (dist<5) {
                this.spawnState = SpawnState.idle;
            }
        }
    }
}
