import { ConnectPosition, LinkDirection, PointLike, Vec2 } from '../jtopo_type';
import { Link } from '../Link';
import { Node } from '../Node';
import { Shape } from '../geom/Shape';
/**
 * 弧线
```js
// 例如:
import {AutoFoldLink} from "@jtopo/core";

let link = new CurveLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new CurveLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new CurveLink('text', beginNode, endNode);
let link = new CurveLink('text', beginNode, endNode, 'center', 'center');
let link = new CurveLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new CurveLink('text', {x: 10, y:20}, endNode, 'center');
let link = new CurveLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class CurveLink extends Link {
    className: string;
    ctrlPoint?: PointLike;
    shape: Shape;
    getCtrlPoints: Function;
    serializers: Array<string>;
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    /**
     * @override
     */
    updatePoints(): PointLike[];
    /**
   * @override
   * @param dx
   * @param dy
   * @returns
   */
    translateWith(dx: number, dy: number): this;
    /**
     * 当没有设置控制点时，自动计算出控制点的位
```js
// 默认计算算法如下：
function autoCalcCtrlPoint(a, z) {
    let midX = (a.x + z.x) / 2;
    let midY = (a.y + z.y) / 2;

    if (this.direction == Direction.horizontal) {
        midY += (z.y - a.y) / 2;
    } else {
        midY -= (z.y - a.y) / 2;
    }

    let mid = {
        x: midX,
        y: midY
    };
    return mid;
}

// 可以根据需要重写, 例如:
CurveLink.prototype.autoCalcCtrlPoint = function(a, z) {
    let midX = (a.x + z.x) / 2;
    let midY = (a.y + z.y) / 2;

    // TODO: ....
    let mid = {
        x: midX,
        y: midY
    };
    return mid;
}
```
     * @param a
     * @param z
     */
    autoCalcCtrlPoint(a: PointLike, z: PointLike): PointLike;
    /**
     * @protected
     * 获取控制点的坐标
     */
    getCtrlPoint(a: PointLike, z: PointLike): PointLike;
    /**
     * 设置控制点
     * @param p
     */
    setCtrlPoint(p: PointLike): void;
    /**
    * 重置控制点-取消自定义的位置，恢复到自动计算
    */
    resetCtrlPoint(): void;
    getPoint(t: number): PointLike;
    /**@protected */
    getBeginArrowDirection(): Vec2;
    /**@protected */
    getEndArrowDirection(): Vec2;
}
export { CurveLink as default };
