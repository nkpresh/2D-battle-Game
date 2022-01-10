
import { _decorator, Component, Node } from 'cc';
import { LivingEntity } from '../Components/LivingEntity';
const { ccclass, property } = _decorator;

//this is my abstract state
export abstract class IEntityState {
    
    EnterState(entity: LivingEntity) {
        entity.currentState = this
    }
    
    abstract UpdateState(spawn: LivingEntity);
    
    abstract OnCollision(spawn: LivingEntity);

    SwitchState(entity: LivingEntity, newState: IEntityState) {
        newState.EnterState(entity);
    }

    NextState(entity: LivingEntity) {
        
    }
}
