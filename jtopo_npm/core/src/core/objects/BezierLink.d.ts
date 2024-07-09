import { Link } from '../Link';
import { ConnectPosition, PointLike } from '../jtopo_type';
import { Node } from '../Node';
import { Shape } from '../geom/Shape';
/**
 * 贝塞尔曲线
 *
```js
// 例如:
import {BezierLink} from "@jtopo/core";

let link = new BezierLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new BezierLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new BezierLink('text', beginNode, endNode);
let link = new BezierLink('text', beginNode, endNode, 'center', 'center');
let link = new BezierLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new BezierLink('text', {x: 10, y:20}, endNode, 'center');
let link = new BezierLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class BezierLink extends Link {
    className: any;
    shape: Shape;
    /**
     * 贝塞尔曲线控制点1
     */
    ctrlPoint1?: PointLike;
    /**
     * 贝塞尔曲线控制点2
     */
    ctrlPoint2?: PointLike;
    private _ctrlPoint1;
    private _ctrlPoint2;
    serializers: Array<string>;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    /**
   * @override
   * @param dx
   * @param dy
   * @returns
   */
    translateWith(dx: number, dy: number): this;
    setCtrlPoint1(p: PointLike): void;
    setCtrlPoint2(p: PointLike): void;
    /**
     * 当没有设置贝塞尔的控制点时，自动计算出控制点的位置
     *
```js
// 默认的计算方法如下：
function autoCalcCtrlPoint(aORz: PointLike, mid: PointLike) {
    let dx = mid.x - aORz.x;
    let dy = mid.y - aORz.y;
    let cx = (mid.x + aORz.x) / 2;
    let cy = (mid.y + aORz.y) / 2;

    let s = 1 - 0.618;
    return {
        x: cx + dx * s,
        y: cy - dy * s
    }
}

// 可以根据需要重写, 例如:
BezierLink.prototype.autoCalcCtrlPoint = function(aORz, mid, zORa) {
    let dx = mid.x - aORz.x;
    let dy = mid.y - aORz.y;
    let cx = (mid.x + aORz.x) / 2;
    let cy = (mid.y + aORz.y) / 2;

    let len = Math.sqrt(dx * dx + dy * dy) / 2;
    let angle = Math.atan2(dy, dx) + Math.PI / 2;

    return {
        x: cx + len * Math.cos(angle),
        y: cy + len * Math.sin(angle)
    };
}
```
     * @param aORz a 或者 z
     * @param mid a 与 z 的中点
     * @returns
     */
    autoCalcCtrlPoint(aORz: PointLike, mid: PointLike, zORa: PointLike): PointLike;
    /**
     * 计算控制点1的坐标
     */
    calcCtrlPoint1(a: PointLike, z: PointLike, mid: PointLike): PointLike;
    calcCtrlPoint2(a: PointLike, z: PointLike, mid: PointLike): PointLike;
    /**
     * 重置控制点-取消自定义的位置，恢复到自动计算
     */
    resetCtrlPoint(): void;
    getPoint(t: any): PointLike;
    updatePoints(): PointLike[];
}
export { BezierLink as default };
