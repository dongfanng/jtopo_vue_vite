import { ConnectPosition, LinkDirection, PointLike } from '../jtopo_type';
import { Link } from '../Link';
import { Node } from '../Node';
/**
 * 折线
```js
// 例如:
import {FoldLink} from "@jtopo/core";

let link = new FoldLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new FoldLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new FoldLink('text', beginNode, endNode);
let link = new FoldLink('text', beginNode, endNode, 'center', 'center');
let link = new FoldLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new FoldLink('text', {x: 10, y:20}, endNode, 'center');
let link = new FoldLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class FoldLink extends Link {
    className: any;
    serializers: Array<string>;
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    updatePoints(): any[];
}
export { FoldLink as default };
