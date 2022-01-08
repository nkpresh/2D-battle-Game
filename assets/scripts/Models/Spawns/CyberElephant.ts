
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from './SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('CyberElephant')
export class CyberElephant extends SpawnBase {

    start () {
        console.log("child");
    }

    update (deltaTime: number) {
        
    }
}
