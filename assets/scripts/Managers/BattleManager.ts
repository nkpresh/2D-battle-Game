
import { _decorator, Component, Node, Sprite } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { Tower } from '../Models/Tower';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {

    @property(Sprite)
    battleGround: Sprite;

    @property(Tower)
    playerTower: Tower;

    @property(Tower)
    aiTower: Tower;

    static instance: BattleManager;

    start () {
        this.init();
    }

    init() {
        BattleManager.instance = this;
    }
    update (deltaTime: number) {
        
    }
    
}
