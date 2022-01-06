
import { _decorator, Component, Node, resources, Prefab, instantiate, Enum } from 'cc';
import { PlayMode} from '../States/Enums';
import { SpawnBase } from './Spawns/SpawnBase';
const { ccclass, property } = _decorator;

Enum(PlayMode)
@ccclass('Tower')
export class Tower extends Component {
    @property({type:PlayMode})
    playerMode: PlayMode;

    @property(Node)
    spawnInitialPos:Node

    allSpawns: SpawnBase[] = new Array<SpawnBase>()
    
    activeSpawns: SpawnBase[] = new Array<SpawnBase>();

    deadSpawns: SpawnBase[] = new Array<SpawnBase>()
    
    start() {
        
    }

    update(deltaTime:number) {
        
    }

    public CreateSpawn() {
        // console.log(this.playerMode);

    }
}
