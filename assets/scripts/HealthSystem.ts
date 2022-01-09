
import { _decorator, Component, Node, ProgressBar, clamp01, clamp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HealthSystem')
export class HealthSystem extends Component {

    maxHp: number=100;
    minHp: number=0;
    currentHp: number;

    start() {
        this.currentHp = 100;
    }

    update (deltaTime: number) {
        this.node.getComponent(ProgressBar).progress = this.ClampedValue();
    }

    ReduceHealth(reductionRate:number) {
        this.currentHp = this.currentHp -= reductionRate;
    }

    GainHealth(gainAmount: number) {
        this.currentHp = this.currentHp += gainAmount;
    }

    ClampedValue():number {
        this.currentHp = clamp(this.currentHp, this.minHp, this.maxHp);
        let percent: number = this.currentHp / this.maxHp;
        return percent;
    }
}
