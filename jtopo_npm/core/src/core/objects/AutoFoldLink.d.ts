import { Link } from '../Link';
import { Node } from '../Node';
import { ConnectPosition, PointLike } from '../jtopo_type';
/**
 * 自动折线
 *
```js
// 例如:
import {AutoFoldLink} from "@jtopo/core";

let link = new AutoFoldLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new AutoFoldLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new AutoFoldLink('text', beginNode, endNode);
let link = new AutoFoldLink('text', beginNode, endNode, 'center', 'center');
let link = new AutoFoldLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new AutoFoldLink('text', {x: 10, y:20}, endNode, 'center');
let link = new AutoFoldLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class AutoFoldLink extends Link {
    className: any;
    private beginOffsetGap;
    private endOffsetGap;
    /** a和z自动吸附距离, 变为一条直线 */
    private absorb;
    /** 开始折点的偏移量 */
    fold1Offset?: PointLike;
    /** 结束折点的偏移量 */
    fold2Offset?: PointLike;
    /** 中线偏移量 */
    centerOffset?: PointLike;
    private _preAngle;
    getCtrlPoints: Function;
    serializers: Array<string>;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    setBeginOffsetGap(n: number): void;
    setEndOffsetGap(n: number): void;
    private _calcFold1;
    private _calcFold2;
    /**@protected */
    _calcFold1Vec(a: PointLike, z: PointLike): any;
    /**@protected */
    _calcFold2Vec(a: PointLike, z: PointLike): any;
    updatePoints(): PointLike[];
    private _calcPointsByAZ;
    /**@protected */
    _afterUpdateMatrix(): void;
    getMergedPoints(): PointLike[];
    setFold1Offset(dx: number, dy: number): void;
    setFold2Offset(dx: number, dy: number): void;
    setCenterOffset(dx: number, dy: number): void;
    resetOffset(): void;
}
export { AutoFoldLink as default };
