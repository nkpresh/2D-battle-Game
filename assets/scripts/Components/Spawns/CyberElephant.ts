
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from './SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('CyberElephant')
export class CyberElephant extends SpawnBase {

    start() {
        super.start();
        this.prefabLocation = 'Prefabs/Spawns/cyberElephant';
        
    }

    update (deltaTime: number) {
        super.update(deltaTime)
    }
}
