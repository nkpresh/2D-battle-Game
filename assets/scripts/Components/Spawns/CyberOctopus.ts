
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from './SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('CyberOctopus')
export class CyberOctopus extends SpawnBase {

    start() {
        super.start();
        this.prefabLocation = 'Prefabs/Spawns/cyberOctopus';
    }

    update (deltaTime: number) {
        super.update(deltaTime)
    }
}
