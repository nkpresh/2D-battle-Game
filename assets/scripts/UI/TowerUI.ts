
import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
import { Tower } from '../Models/Tower';
import { PlayMode, SpawnState, TowerState } from '../States/StateBase';
const { ccclass, property } = _decorator;

@ccclass('TowerUI')
export class TowerUI extends Component {

    State: TowerState;

    tower: Tower

    @property(Node)
    initialSpawnPos: Node;

    @property({ type: PlayMode })
    playerMode: PlayMode;


    
    init() {
        this.tower=new Tower
    }
    start () {
        
    }

    update (deltaTime: number) {
        if (this.State == TowerState.spawnning) {
        }
    }
}
