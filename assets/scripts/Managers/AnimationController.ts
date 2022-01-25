
import { _decorator, Component, Node, Skeleton } from 'cc';
import { SpawnBase } from '../Components/Spawns/SpawnBase';
const { ccclass, property } = _decorator;

@ccclass('AnimationController')
export class AnimationController extends Component {

    @property(SpawnBase)
    spawn: SpawnBase
    
    
    start() {
        
    }
    update(deltaTime: number) {
        
    }

    playAnimation(spawn:Skeleton,animationName:string) {
        
    }
}
