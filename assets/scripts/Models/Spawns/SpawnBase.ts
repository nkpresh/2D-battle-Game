
import { _decorator, Component, Node } from 'cc';
import { SpawnState } from '../../States/StateBase';
const { ccclass, property } = _decorator;

@ccclass('SpawnBase')
export class SpawnBase extends Component {

    spawnState: SpawnState;
    
    start () {
        
    }

    update (deltaTime: number) {
        
    }
}
