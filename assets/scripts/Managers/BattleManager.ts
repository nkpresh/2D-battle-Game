
import { _decorator, Component, Node, Sprite } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {

    // @property(Sprite)
    // battleGround: Sprite;

    // @property(Tower)
    // playerTower: Tower;

    // @property(Tower)
    // aiTower: Tower;

    // spawnHandler: SpawnHandler;

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
    
}
