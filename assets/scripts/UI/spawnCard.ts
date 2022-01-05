
import { _decorator, Component, Node, Button } from 'cc';
import { TowerController } from '../Controllers/TowerController';
import { BattleManager } from '../Managers/BattleManager';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { TowerState } from '../States/StateBase';
import { TowerUI } from './TowerUI';
const { ccclass, property } = _decorator;

@ccclass('SpawnCard')
export class SpawnCard extends Component {

    cyberSpawn: SpawnBase;
    start() {
        this.init();
        this.node.on('click', (() => {
            
            TowerController.instance.SwitchTowerState(TowerController.instance.playerTower, TowerState.spawnning);
        }), this.node);
    }

    init() {
        this.cyberSpawn = new SpawnBase();
    }
    update (deltaTime: number) {
        
    }
}