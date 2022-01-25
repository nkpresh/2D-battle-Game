
import { _decorator, Component, Node, Vec3 } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
const { ccclass, property } = _decorator;

//this is my abstract state
export abstract class EntityState {
    
    EnterState(entity: LivingEntity) {
        entity.currentState = this
    }
    
    abstract UpdateState(spawn: LivingEntity);
    
    abstract OnCollision(spawn: LivingEntity);

    SwitchState(entity: LivingEntity, newState: EntityState) {
        newState.EnterState(entity);
    }

    EnemyInRange(entity: LivingEntity,enemy:LivingEntity) {
        let dist = Vec3.distance(entity.currentLocation,enemy.currentLocation)
        if (dist <= 0) {
            console.log("reached");
        }
    }
}
