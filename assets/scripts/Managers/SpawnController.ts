
import { _decorator, Component, Node, sp, Vec3 } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { PlayMode } from './Enums';
const { ccclass, property } = _decorator;

@ccclass('SpawnController')
export  class SpawnController extends Component {

    SpawnTroop: SpawnBase[] = new Array<SpawnBase>();
    playerMode: PlayMode

    // tower:
    
    spawnInitialPos: Vec3;
    start () {
        this.SpawnTroop.forEach(spawn => {
        spawn.movingState.EnterState(spawn);
        spawn.movingState.UpdateState(spawn);
        });
    }

    update (deltaTime: number) {
        
    }

    AddSpawn(spawn: SpawnBase) {
        if (spawn.spawnControl == this.playerMode) {
            this.SpawnTroop.push(spawn);
        }
        return;
    }
    AttackOpponent(targets: LivingEntity[]) {
        
        for (let i = 0; i < this.SpawnTroop.length; i++){
            for (let j = 0; j < targets.length; j++){
                
                let dist=Vec3.distance(this.SpawnTroop[i].currentLocation,targets[j].currentLocation)
                if (dist <= 30) {
                    console.log("reached")
                }
            }
        }
    }
}
