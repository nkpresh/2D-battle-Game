
import { _decorator, Component, Node, resources, Prefab, instantiate } from 'cc';
import { TowerState } from '../States/StateBase';
import { SpawnBase } from './Spawns/SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('Tower')
export class Tower extends Component {

    //the tower is first Idle, then the player spawns CyberSpawns from the tower, the tower attacks any enemy that comes close to it/ 
    State: TowerState;
    spawnToGenerate: SpawnBase;

    allSpawns:SpawnBase[]=new Array<SpawnBase>()
    activeSpawns: SpawnBase[] = new Array<SpawnBase>();
    deadSpawns:SpawnBase[]=new Array<SpawnBase>()

    start () {
        
    }

    update (deltaTime: number) {
        
    }
    GenerateSpawn() {

        // if (this.State == TowerState.spawnning) {
        //     resources.load('Prefabs/Spawns/cyberElephant', Prefab, (err,spawnPrefab) => {
        //         let spawnNode: Node = instantiate(spawnPrefab);
                
        //     })
        // }
    }
}
