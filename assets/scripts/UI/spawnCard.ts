
import { _decorator, Component, Node, Button } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('SpawnCard')
export class SpawnCard extends Component {

    cyberSpawn: SpawnBase;
    start() {
        this.init();
        this.node.on('click', (() => {
            BattleManager.instance.playerTower.CreateSpawn(this.cyberSpawn);
        }), this.node);
    }

    init() {
        this.cyberSpawn = new SpawnBase();
    }
    update (deltaTime: number) {
        
    }
}