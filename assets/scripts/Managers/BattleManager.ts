
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { Tower } from '../Models/Tower';
import { TowerState } from '../States/StateBase';
const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {

    @property(Tower)
    playerTower: Tower;

    static instance: BattleManager;
    start () {
        this.init();
    }

    init() {
        BattleManager.instance = this;
    }
    update (deltaTime: number) {
        
    }

    GenerateSpawn(cyberSpawn: SpawnBase) {
        // this.tower.State = TowerState.spawnning;
        // this.tower.spawnToGenerate = cyberSpawn;
        // this.tower.GenerateSpawn();

    }
}
