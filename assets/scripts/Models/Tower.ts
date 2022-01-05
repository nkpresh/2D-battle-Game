
import { _decorator, Component, Node, resources, Prefab, instantiate, Enum } from 'cc';
import { PlayMode, TowerState } from '../States/StateBase';
import { SpawnBase } from './Spawns/SpawnBase';
const { ccclass, property } = _decorator;

Enum(PlayMode)
@ccclass('Tower')
export class Tower extends Component {

    playerMode: PlayMode;
    allSpawns:SpawnBase[]=new Array<SpawnBase>()
    activeSpawns: SpawnBase[] = new Array<SpawnBase>();
    deadSpawns:SpawnBase[]=new Array<SpawnBase>()

}
