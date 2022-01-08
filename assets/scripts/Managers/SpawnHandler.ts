
import { _decorator, Component, Node, resources, Prefab, instantiate, tween, Vec3, sp } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { PlayMode, SpawnState } from './Enums';
import { BattleManager } from './BattleManager';
const { ccclass, property } = _decorator;

@ccclass('SpawnHandler')
export class SpawnHandler{

    public CreateSpawn(spawn: SpawnBase, spawnInitialPos: Vec3) {
        // console.log(spawn);
        let newNode: Node;
        resources.load(spawn.prefabLocation, Prefab, (err, spawnPrefab) => {
            newNode = instantiate(spawnPrefab);
            newNode.getComponent(SpawnBase).playMode =spawn.playMode;
            console.log(newNode.getComponent(SpawnBase).playMode);


        });
        tween(this).delay(0.5).call(() => {
            BattleManager.instance.battleGround.node.addChild(newNode);
            newNode.setWorldPosition(spawnInitialPos); 
            let newSpawn: SpawnBase = newNode.getComponent(SpawnBase)
            // console.log(spawn.playMode)
            this.CreateTarget(newSpawn);
            newSpawn.spawnState = SpawnState.moving;
        }).start();
    }

    CreateTarget(spawn: SpawnBase) {
        console.log(spawn.playMode);
        if (spawn.playMode == PlayMode.Player) {
            spawn.enemyTower=BattleManager.instance.aiTower
        } else if(spawn.playMode == PlayMode.AI) {
            spawn.enemyTower=BattleManager.instance.playerTower
        }
        console.log(spawn.enemyTower);
    }
    
}
