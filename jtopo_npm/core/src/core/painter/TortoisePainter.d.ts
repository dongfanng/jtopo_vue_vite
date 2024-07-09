/**@ignore */
declare class TortoisePainter {
    _position: any;
    marks: any;
    _stepSize: any;
    _direction: any;
    position: {
        x: number;
        y: number;
    };
    direction: number;
    stepSize: number;
    dx: number;
    dy: number;
    _actions: Array<any>;
    constructor();
    init(): this;
    addAction(name: any, args?: any): this;
    mark(name: any): this;
    getMark(name: any): any;
    faceToMark(name: any): this;
    moveToMark(name: any): this;
    forwardToMark(name: any): this;
    forwardToMarks(names: any): this;
    updateDxy(): this;
    faceTo(p: any): this;
    forward(size: any): this;
    /**
     * 使用当前步长并朝着当前方向
     * @param {number} stepCount
     */
    jump(stepCount: any): this;
    moveTo(p: any): this;
    moveToMiddle(a: any, z: any): this;
    forwardTo(p: any): this;
    turnLeft(direction: any): this;
    turnRight(direction: any): this;
    size(stepSize: any): this;
    sizeBy(newDistance: any): this;
    sizeWith(d: any): this;
    getDistance(p: any): number;
    getAngle(p: any): number;
    static OP: {
        forward: string;
        forwardTo: string;
        moveTo: string;
        jump: string;
    };
}
export { TortoisePainter as default };
