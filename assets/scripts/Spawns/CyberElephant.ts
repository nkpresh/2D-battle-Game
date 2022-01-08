
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from './SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('CyberElephant')
export class CyberElephant extends SpawnBase {

    start() {
        this.init();
        console.log(this.currentState)
    }

    update (deltaTime: number) {
        
    }
}
