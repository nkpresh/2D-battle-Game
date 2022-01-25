
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { SpawnCard } from '../UI/spawnCard';
import { PlayMode } from './Enums';
import { SpawnController } from './SpawnController';
const { ccclass, property } = _decorator;

@ccclass('AiSpawnController')
export class AiSpawnController extends SpawnController {

    start () {
        this.playerMode = PlayMode.AI;
        super.start();
    }

    update (deltaTime: number) {
        
    }
}
