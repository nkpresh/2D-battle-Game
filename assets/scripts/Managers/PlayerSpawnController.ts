
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { PlayMode } from './Enums';
import { SpawnController } from './SpawnController';
const { ccclass, property } = _decorator;

@ccclass('PlayerSpawnController')
export class PlayerSpawnController extends SpawnController {
        playerSpawns: SpawnBase[] = new Array<SpawnBase>(); 

    start () {
        this.playerMode = PlayMode.Player;
        super.start();
        
    }

    update (deltaTime: number) {
        
    }
}
