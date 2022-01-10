
import { _decorator, Component, Node, Sprite } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { PlayMode } from './Enums';

const { ccclass, property } = _decorator;

@ccclass('BattleManager')
export class BattleManager extends Component {

    playerSpawns: SpawnBase[] = new Array<SpawnBase>(); 

    @property(Node)
    playerShip: Node;

    @property(Node)
    aiShip: Node;

    static instance: BattleManager;

    start () {
        this.init();
    }

    init() {
        BattleManager.instance = this;
    }
    update (deltaTime: number) {
        
    }

    CreateTarget(spawn: LivingEntity) {
        if (spawn.spawnControl == PlayMode.Player) {
            spawn.target = this.aiShip.worldPosition;
        } else if (spawn.spawnControl == PlayMode.AI) {
            spawn.target = this.playerShip.worldPosition;
        }
    }
    
}
