
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from './SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('CyberFish')
export class CyberFish extends SpawnBase {

    start() {
        super.start();
        this.prefabLocation = 'Prefabs/Spawns/cyberFish';
    }

    update (deltaTime: number) {
        super.update(deltaTime)
    }
}
