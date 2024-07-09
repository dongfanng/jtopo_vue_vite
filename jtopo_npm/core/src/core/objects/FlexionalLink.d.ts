import { ConnectPosition, LinkDirection, PointLike } from '../jtopo_type';
import { Link } from '../Link';
import { Node } from '../Node';
/**
 * 二次折线 (多数情况下被AutoFoldLink所替代)
```js
// 例如:
import {FlexionalLink} from "@jtopo/core";

let link = new FlexionalLink('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new FlexionalLink();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new FlexionalLink('text', beginNode, endNode);
let link = new FlexionalLink('text', beginNode, endNode, 'center', 'center');
let link = new FlexionalLink('text', beginNode, {x: 10, y:20}, 'center');
let link = new FlexionalLink('text', {x: 10, y:20}, endNode, 'center');
let link = new FlexionalLink('text', {x:0, y:0}, {x: 10, y:20});
```
 */
export declare class FlexionalLink extends Link {
    className: any;
    serializers: Array<string>;
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    private offsetGap;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    getFold1(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold2(a: any, z: any): {
        x: number;
        y: any;
    } | {
        x: any;
        y: number;
    };
    updatePoints(): {
        x: any;
        y: any;
    }[];
}
export { FlexionalLink as default };
