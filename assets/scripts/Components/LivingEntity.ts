
import { _decorator, Component, Node, Vec3 } from 'cc';
import { HealthSystem } from '../HealthSystem';
import { PlayMode } from '../Managers/Enums';
import { AttackingState } from '../States/AttackingState';
import { DeadState } from '../States/DeadState';
import { IdleState } from '../States/IdleState';
import { ISpawnState } from '../States/ISpawnState';
import { MovingState } from '../States/MovingState';

const { ccclass, property } = _decorator;

@ccclass('LivingEntity')
export class LivingEntity extends Component {

    @property({ type: PlayMode })
    spawnControl: PlayMode;

    target: Vec3;

    currentState: ISpawnState;
    idleState: ISpawnState = new IdleState();
    movingState: ISpawnState = new MovingState();
    attackingState: ISpawnState = new AttackingState();
    deadState: ISpawnState = new DeadState();
    
    @property(HealthSystem)
    spawnHealth: HealthSystem;
    
    start () {
        
    }

    update (deltaTime: number) {
        
    }
}
