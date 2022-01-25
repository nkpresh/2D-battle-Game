
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('Ship')
export class Ship extends Component {

    @property(Node)
    spawnInitSpot: Node;
    
    start () {
        
    }

    update (deltaTime: number) {
        
    }
}