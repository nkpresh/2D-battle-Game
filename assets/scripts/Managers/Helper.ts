import { Color, EditBoxComponent, math, Vec2, Vec3, SpriteFrame, ImageAsset, Texture2D } from 'cc';
// import { UnitDirection } from './Enums';


//#region Helper Constants



//#endregion


//#region Helper Classes

export class Guid {
    public static newGuid(): Guid {
        return new Guid('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = (c == 'x') ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    public static get empty(): string {
        return '00000000-0000-0000-0000-000000000000';
    }
    public get empty(): string {
        return Guid.empty;
    }
    public static isValid(str: string): boolean {
        const validRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return validRegex.test(str);
    }
    private value: string = this.empty;
    constructor(value?: string) {
        if (value) {
            if (Guid.isValid(value)) {
                this.value = value;
            }
        }
    }
    public toString() {
        return this.value;
    }

    public toJSON(): string {
        return this.value;
    }
}

export class Coord {

    public x: number;
    public y: number;

    public isWalakable: boolean = true;
    public worldPosition: Vec2;

    public gCost: number = 0;
    public hCost: number = 0;

    public parant: Coord;

    public get fCost() {
        return this.gCost + this.hCost;
    }

    constructor(x: number, y: number) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }

    public getDistance(target: Coord) {
        return Math.abs(this.x - target.x) + Math.abs(this.y - target.y);
    }

    public equals(coord: Coord): boolean {
        return this.x == coord.x && this.y == coord.y;
    }

}

export class Queue<T> {
    _store: T[] = [];


    constructor(array: T[]) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            this._store.push(element);
        }
    }

    push(val: T) {
        //_store?
        this._store.push(val);
    }
    pop(): T {
        return this._store.shift();
    }
}


class Obj<T> {
    public val: T;
    constructor(a: T) {
        this.val = a;
    }
}

//#endregion

//#region Helper Functions


export function GetSpriteFromImageAsset(asset: ImageAsset): SpriteFrame {
    let sprite = new SpriteFrame();
    let texture = new Texture2D();
    texture.image = asset;
    sprite.texture = texture;
    return sprite;
}


export function DateDifference(dateA: Date, dateB: Date): number {

    let A = dateA.getTime() / 1000;
    let B = dateB.getTime() / 1000;

    return (A - B);
}

export function GetPercentRate01(current: number, min: number, max: number): number {

    current = math.clamp(current, min, max);
    let minV = min - current;
    let maxV = min - max;
    let percent = minV / maxV;
    if (percent <= 0) return 0;
    return Helper_round(percent, 5);
}

export function shuffle<T>(array: T[]): T[] {
    // if it's 1 or 0 items, just return
    if (array.length <= 1) return array;

    // For each index in array
    for (let i = 0; i < array.length - 1; i++) {

        const randomChoiceIndex = Math.floor(getRandom(i, array.length));
        var temp = array[randomChoiceIndex];
        array[randomChoiceIndex] = array[i];
        array[i] = temp;

    }

    return array;
}

export function getRandom(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

//Create a multi dimentional array, the defalt value will be the type of the array.
export function initMultiArray<T>(x: number, y: number, _default: T): T[][] {
    let mapFlags = [] //start with a single dimention

    for (var i: number = 0; i < x; i++) {
        mapFlags[i] = []; // initialize the fist slot
        for (var j: number = 0; j < y; j++) {
            mapFlags[i][j] = _default; // populate the array content with defualt value
        }
    }
    return mapFlags;
}

export function lerpColor(ColorA: Color, colorB: Color, percent: number): Color {

    let r = math.lerp(ColorA.r, colorB.r, percent);
    let g = math.lerp(ColorA.g, colorB.g, percent);
    let b = math.lerp(ColorA.b, colorB.b, percent);
    let a = math.lerp(ColorA.a, colorB.a, percent);
    return new Color(r, g, b, a);
}

export function lerpVec3(a: Vec3, b: Vec3, t: number): Vec3 {

    t = math.clamp01(t);
    return new Vec3(
        a.x + (b.x - a.x) * t,
        a.y + (b.y - a.y) * t,
        a.z + (b.z - a.z) * t
    );
}

export function MoveTowards(current: Vec3, target: Vec3, maxDistanceDelta: number): Vec3 {
    //console.log(from);

    let toVector_x = target.x - current.x;
    let toVector_y = target.y - current.y;
    let toVector_z = target.z - current.z;

    let sqdist = toVector_x * toVector_x + toVector_y * toVector_y + toVector_z * toVector_z;
    if (sqdist == 0 || (maxDistanceDelta >= 0 && sqdist <= maxDistanceDelta * maxDistanceDelta))
        return target.clone();

    let dist = Math.sqrt(sqdist);

    return new Vec3(current.x + toVector_x / dist * maxDistanceDelta,
        current.y + toVector_y / dist * maxDistanceDelta,
        current.z + toVector_z / dist * maxDistanceDelta);

}





export function ArrayRemove(array: Coord[], value: Coord) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].x == value.x && array[i].y == value.y) {
            array.splice(i, 1);
            break;
        }
    }

}

export function ArrayContains(array: any[], value: any): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}

export function Helper_Sin(degree: number) {
    return Helper_round(Math.sin(math.toRadian(degree)), 2);
}
export function Helper_Cos(degree: number) {
    return Helper_round(Math.cos(math.toRadian(degree)), 2);
}

export function Helper_round(value: number, digit: number) {
    let whole = Math.pow(10, digit);
    return Math.round(value * whole) / whole;
}

export function snap(point: number, v: number): number {
    let x: number = point;
    return Math.floor(x / v) * v;
}

//#endregion

