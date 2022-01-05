
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { Tower } from '../Models/Tower';
import { TowerState } from '../States/StateBase';
import { TowerUI } from '../UI/TowerUI';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {



    static instance: BattleManager;

    start () {
        this.init();
    }

    init() {
        BattleManager.instance = this;
    }
    update (deltaTime: number) {
        
    }

    GenerateSpawn() {
        
    }
    
}
