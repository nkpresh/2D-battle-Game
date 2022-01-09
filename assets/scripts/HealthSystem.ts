
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HealthSystem')
export class HealthSystem extends Component {

    maxHp: number=100;
    minHp: number=0;
    currentHp: number;

    start () {
        
    }

    update (deltaTime: number) {
        
    }

    ReduceHealth(reductionRate:number) {
        this.currentHp = this.currentHp - reductionRate
        
    }
}
