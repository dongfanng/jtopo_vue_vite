import { Shape } from '../geom/Shape';
import { Node } from '../Node';
/**
 * 圆形节点
``` js
let circleNode = new CircleNode('Circle', 181, 48);

// 设置半径
circleNode.setRadius(25);

// 等价于上面的.setRadius(25);
circleNode.resizeTo(50, 50);
```
 */
export declare class CircleNode extends Node {
    className: any;
    shape: Shape;
    /**
     * 半径
     */
    radius: number;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    /**
     * 设置半径，会同时修改width和height
     * @param {number} r 圆半径
     */
    setRadius(r?: number): void;
    /**
     * 获取半径
     * @returns
     */
    getRadius(): number;
    getPoint(t: any): {
        x: number;
        y: number;
    };
}
export { CircleNode as default };
