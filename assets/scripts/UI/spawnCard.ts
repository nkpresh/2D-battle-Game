
import { _decorator, Component, Node, Button, Vec3, instantiate, resources, Prefab, tween, Tween, Enum } from 'cc';
import { CyberElephant } from '../Components/Spawns/CyberElephant';
import { CyberFish } from '../Components/Spawns/CyberFish';
import { CyberOctopus } from '../Components/Spawns/CyberOctopus';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
import { BattleManager } from '../Managers/BattleManager';
import { PlayMode, spawnTpye } from '../Managers/Enums';
const { ccclass, property } = _decorator;

Enum(spawnTpye)
@ccclass('SpawnCard')
export class SpawnCard extends Component {

    @property({type:spawnTpye})
    cyberSpawnTpye: spawnTpye;

    cyberSpawn: SpawnBase=new SpawnBase();

    start() {
        this.init();
        this.node.on('click', (() => {
            this.CreateNode(this.cyberSpawn);
        }), this.node);
    }

    init() {
        if (this.cyberSpawnTpye == spawnTpye.Elephant) {
            this.cyberSpawn = new CyberElephant();
        }else if (this.cyberSpawnTpye == spawnTpye.Octopus) {
            this.cyberSpawn = new CyberOctopus();
        }else if (this.cyberSpawnTpye == spawnTpye.Fish) {
            this.cyberSpawn = new CyberFish();
        }
        
        
    }
    update (deltaTime: number) {
        
    }

    CreateNode(spawn: SpawnBase) {
        resources.load(spawn.prefabLocation, Prefab, (err, spawnPref) => {
            let newNode:Node = instantiate(spawnPref);
            tween(this).delay(0.5).call(
                () => {
                    newNode.getComponent(SpawnBase).spawnControl = PlayMode.Player
                    BattleManager.instance.AddSpawnToATroop(newNode.getComponent(SpawnBase));
                    BattleManager.instance.AddSpawnToBattle(newNode);
                }
            ).start();
        });        
    }
}