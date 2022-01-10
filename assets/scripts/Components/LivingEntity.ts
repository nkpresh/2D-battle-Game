
import { _decorator, Component, Node, Vec3, Enum } from 'cc';
import { HealthSystem } from '../HealthSystem';
import { PlayMode } from '../Managers/Enums';
import { AttackingState } from '../States/AttackingState';
import { DeadState } from '../States/DeadState';
import { IdleState } from '../States/IdleState';
import { IEntityState } from '../States/IEntityState';
import { MovingState } from '../States/MovingState';

const { ccclass, property } = _decorator;

Enum(PlayMode)
@ccclass('LivingEntity')
export class LivingEntity extends Component {

    isDead: boolean = false;

    target: Vec3;

    currentState: IEntityState;
    idleState: IEntityState = new IdleState();
    movingState: IEntityState = new MovingState();
    attackingState: IEntityState = new AttackingState();
    deadState: IEntityState = new DeadState();
    
    @property(HealthSystem)
    entityHealth: HealthSystem;

    @property({ type: PlayMode })
    spawnControl: PlayMode=PlayMode.Player;
    
    start () {
        
    }

    update (deltaTime: number) {
        
    }

    Attack(entityToAttack: LivingEntity) {
        if (entityToAttack.isDead) {
            this.currentState.SwitchState(this,this.idleState)
            return;
        }
        if (this.entityHealth.currentHp<=this.entityHealth.minHp) {
            this.currentState.SwitchState(this, this.deadState)
        }
        let amount=Math.floor(Math.random() * (20 - 5 + 4) + 5);
        entityToAttack.entityHealth.ReduceHealth(amount);
    }
}
