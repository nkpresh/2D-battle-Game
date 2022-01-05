
import { _decorator, Component, Node, Button } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('SpawnCard')
export class SpawnCard extends Component {

    button: Button;

    cyberSpawn: SpawnBase;
    start() {
        this.init();
        this.button = this.getComponent(Button);
        this.node.on('click', (() => {
            BattleManager.instance.GenerateSpawn(this.cyberSpawn);
        }), this.node);
    }

    init() {
        this.cyberSpawn = new SpawnBase();
    }
    update (deltaTime: number) {
        
    }
}
