
import { _decorator, Component, Node, Sprite } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { PlayMode } from './Enums';
import { PlayerSpawnController } from './PlayerSpawnController';
import { SpawnController } from './SpawnController';

const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {


    @property(Node)
    playerShip: Node;

    @property(Node)
    aiShip: Node;

    @property(Node)
    battleGround:Node

    playerController: SpawnController = new PlayerSpawnController();
    aiController: SpawnController = new PlayerSpawnController();

    static instance: BattleManager;

    start () {
        this.init();
    }

    init() {
        BattleManager.instance = this;

    }
    update (deltaTime: number) {
        
    }

    AddSpawnToATroop(spawn: SpawnBase) {
        if (spawn.spawnControl == PlayMode.AI) {
            this.aiController.SpawnTroop.push(spawn);
        }
        else if (spawn.spawnControl == PlayMode.Player) {
            this.playerController.SpawnTroop.push(spawn);
        }

    }
    AddSpawnToBattle(spawnNode: Node) {
        // spawnNode.setWorldPosition()
        spawnNode.parent = this.battleGround;
    }
}
