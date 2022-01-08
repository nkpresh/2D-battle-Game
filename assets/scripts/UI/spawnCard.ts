
import { _decorator, Component, Node, Button, Vec3 } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { PlayMode } from '../Managers/Enums';
const { ccclass, property } = _decorator;

@ccclass('SpawnCard')
export class SpawnCard extends Component {

    cyberSpawn: SpawnBase;
    start() {
        this.init();
        this.node.on('click', (() => {
            let initPos: Vec3 = BattleManager.instance.playerTower.spawnInitialPos.worldPosition;
            this.cyberSpawn.playMode = PlayMode.Player;
            BattleManager.instance.spawnHandler.CreateSpawn(this.cyberSpawn, initPos);
        }), this.node);
    }

    init() {
        this.cyberSpawn = new SpawnBase();
        
    }
    update (deltaTime: number) {
        
    }
}