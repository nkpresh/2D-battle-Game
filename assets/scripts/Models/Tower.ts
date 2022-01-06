
import { _decorator, Component, Node, resources, Prefab, instantiate, Enum, UITransform, tween } from 'cc';
import { BattleManager } from '../Managers/BattleManager';
import { PlayMode, SpawnState} from '../States/Enums';
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

    public CreateSpawn(spawn:SpawnBase) {
        resources.load(spawn.prefabLocation, Prefab, (err, spawnPrefab) => {
            let newNode:Node = instantiate(spawnPrefab);
            BattleManager.instance.battleGround.node.addChild(newNode);
            newNode.setWorldPosition(this.spawnInitialPos.worldPosition);

            tween(newNode).call(() => {
                newNode.getComponent(SpawnBase).spawnState = SpawnState.moving;
                console.log(newNode.getComponent(SpawnBase).spawnState);
            }).delay(0.5).start();

        });

    }
}
