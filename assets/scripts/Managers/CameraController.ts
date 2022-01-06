
import { _decorator, Component, Touch, Node, systemEvent, SystemEvent, EventTouch, Vec2, Sprite, UITransform, Vec3, Camera } from 'cc';
import { lerpVec3 } from '../Managers/Helper';
const { ccclass, property } = _decorator;

@ccclass('CameraController')
export class CameraController extends Component {

    startPos: Vec3;
    currentPos: Vec3;
    newCamPos: Vec3;
    moveSpeed = 10;
    Bound: Vec2;
    camera: Camera;

    @property(Sprite)
    battleGround: Sprite
    
    // static instance: CameraController;

    start() {
        this.init();
        this.Border();
        this.newCamPos = this.node.position;
        systemEvent.on(SystemEvent.EventType.TOUCH_START, ((touch: Touch, event: EventTouch) =>{
            this.onTouchStart(event);
        }), this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, ((touch: Touch, event: EventTouch) =>{
            this.onTouchMove(event);
        }), this);
    }

    init() {    
        this.camera = this.node.getComponent(Camera);
    }

    update (deltaTime: number) {
        let newBound = new Vec2(((this.Bound.x / 2)) - (this.camera.orthoHeight * this.camera.camera.aspect), (this.Bound.y/2) - this.camera.orthoHeight);
        this.newCamPos = this.newCamPos.clampf(new Vec3(-newBound.x, -newBound.y, 1), new Vec3(newBound.x, newBound.y, 1));
        this.node.position = lerpVec3(this.node.position, this.newCamPos, this.moveSpeed * deltaTime);
    }

    onTouchStart(event: EventTouch) {
        this.startPos =new Vec3(event.getLocation().x,event.getLocation().y,0) ;
        this.currentPos = new Vec3(event.getLocation().x, event.getLocation().y, 0);
    }

    onTouchMove(event: EventTouch) {
        let newPosition = new Vec3(event.getLocation().x, event.getLocation().y, 0);
        let delta = this.currentPos.subtract(newPosition);
        this.newCamPos = this.newCamPos.add(new Vec3(delta.x, delta.y, 0));
        // console.log(this.newCamPos = this.newCamPos.add(new Vec3(delta.x, delta.y, 0)));
        this.currentPos = newPosition;
    }
    Border() {
        let bgSize = this.battleGround.getComponent(UITransform).contentSize;
        let height = bgSize.y
        let width = bgSize.x
        this.Bound=new Vec2(width,height)
    }
}