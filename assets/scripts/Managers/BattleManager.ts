
import { _decorator, Component, Node, Sprite } from 'cc';
import { SpawnBase } from '../Spawns/SpawnBase';
import { PlayMode } from './Enums';

const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {

    // @property(Sprite)
    // battleGround: Sprite;

    @property(Node)
    playerShip: Node;

    @property(Node)
    aiShip: Node;

    static instance: BattleManager;

    start () {
        this.init();
    }

    init() {
        // BattleManager.instance = this;
        // this.spawnHandler = new SpawnHandler();

    }
    update (deltaTime: number) {
        
    }

    CreateTarget(spawn: SpawnBase) {
        if (spawn.spawnControl == PlayMode.Player) {
            spawn.targetLocation = this.aiShip.worldPosition;
        } else if (spawn.spawnControl == PlayMode.AI) {
            spawn.targetLocation = this.playerShip.worldPosition;
        }
        spawn.movingState.EnterState(spawn);
    }
    
}
