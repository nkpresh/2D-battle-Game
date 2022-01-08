
import { _decorator, Component, Node, Vec2, Vec3, systemEvent, System, SystemEvent, EventKeyboard, KeyCode, resources, Prefab, instantiate, tween } from 'cc';

const { ccclass, property } = _decorator;

//this is my Models
@ccclass('SpawnBase')
export class SpawnBase{
    maxHp: number;
    minHp: number;
    currentHp: number;
}
