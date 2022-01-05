
import { _decorator, Component, Node } from 'cc';
import { Tower } from '../Models/Tower';
import { TowerState } from '../States/StateBase';
import { TowerUI } from '../UI/TowerUI';
const { ccclass, property } = _decorator;

@ccclass('TowerController')
export class TowerController extends Component {
    tower: Tower

    @property(TowerUI)
    playerTower: TowerUI;

    @property(TowerUI)
    AItower: TowerUI;

    static instance:TowerController
    start () {
        TowerController.instance = this;
    }

    update (deltaTime: number) {
        
    }

    SwitchTowerState(tower: TowerUI, state: TowerState) {
        tower.State = state;
        return state;
    }
}
