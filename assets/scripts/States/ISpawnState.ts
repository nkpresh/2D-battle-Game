
import { _decorator, Component, Node } from 'cc';
import { SpawnBase } from '../Models/Spawns/SpawnBase';
import { SpawnState } from './Enums';
const { ccclass, property } = _decorator;

export abstract class ISpawnState {

    private spawnState: SpawnState
    
    constructor(parameters) {
        
    }


}
