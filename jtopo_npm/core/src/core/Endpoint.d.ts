import { DisplayObject } from './DisplayObject';
import { PointLike, RectPosition } from './jtopo_type';
export type LinkTarget = Endpoint | DisplayObject | PointLike;
/**
 * 端点基类，表示link连接对象上的具体位置
 *
 * 子类有：
 *
 * EndpointFixedPoint: 表示连接到一个固定的坐标(x,y)
 *
 * EndpointSegment: 表示连接到Node或Link的某一条线段上
 *
 * EndpointFixedName： 表示连接到Node或Link的某个 ’位置‘ 上，如: 'center'、'ct'、'lm'
 *
 * EndpointNearest: 表示连接到Node的边框上
 *
```js

import {EndpointFixedPoint} from '@jtopo/core';

// 示例
link.setBegin({x: 10, y: 10});

// 等价于：
let endpoint = new EndpointFixedPoint(10, 10);
link.setBegin(endpoint);

let endpointBegin = link.begin;
console.log(endpointBegin.x); // => 10

```
 */
declare abstract class Endpoint {
    className: string;
    /**
     * 被连接的对象, 可能为空
     */
    target?: DisplayObject;
    isDisplayObjectTarget(): boolean;
    isNodeTarget(): any;
    hasTarget(): boolean;
    toJSON(objIndexMap?: Map<DisplayObject, number>): any;
    static fromJSON(json: any, objIndexMap?: {
        [key: number]: any;
    }): any;
}
/**
 * 端点：表示连接到Node或Link的某一个线段上
```js
import {EndpointSegment} from '@jtopo/core';

// 示例
let endpoint = new EndpointSegment(link2, 0.5, 0);
link.setBegin(endpoint);

```
*/
declare class EndpointSegment extends Endpoint {
    className: string;
    t: number;
    segIndex: number;
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    constructor(target: DisplayObject, t: number, segIndex?: number);
}
/**
 * 端点：以节点上某个位置名字来定位
```js
import {EndpointFixedName} from '@jtopo/core';

// 示例
let endpoint = new EndpointFixedName(node, 'ct');
link.setBegin(endpoint);

等价于:
link.setBegin(node, 'ct');

```
*/
declare class EndpointFixedName extends Endpoint {
    className: string;
    /**
     * 位置名称：例如： ct、center、lm
     */
    name: RectPosition;
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    /**
     *@param name 位置名称， 例如： ct、center、lm
     */
    constructor(target: DisplayObject, name: RectPosition);
    getAngle(): number;
    /**
     * 获取朝向中心的向量
     */
    getVec(): number[];
}
/**
 * 端点：以两个对象之间最短距离来定位
```js
import {EndpointNearest} from '@jtopo/core';

// 示例
let endpoint = new EndpointNearest(node);
link.setBegin(endpoint);

等价于:
link.setBegin(node, 'nearest');

```
*/
declare class EndpointNearest extends Endpoint {
    className: string;
    /**
     * 被连接的对象
     */
    target: DisplayObject;
    constructor(target: DisplayObject);
    /**
     *
     * @param p 边框上的交点
     * @returns
     */
    getAngle(p: PointLike): number;
}
/**
 * 端点: 固定的一个坐标值
```js
import {EndpointFixedPoint} from '@jtopo/core';

// 示例
let endpoint = new EndpointFixedPoint(12, 20);
link.setBegin(endpoint);

等价于:
link.setBegin({x:12, y:20});

// node的右上角
let endpoint = new EndpointFixedPoint(node.width/2, -node.height/2, fromNode);

// node的中心
let endpoint = new EndpointFixedPoint(0, 0, fromNode);

// node的左下角
let endpoint = new EndpointFixedPoint(-node.width/2, node.height/2, 0, fromNode);
```
*/
declare class EndpointFixedPoint extends Endpoint {
    className: string;
    x: number;
    y: number;
    /**
     * 如果指定了target对象，x,y 在target对象的本地坐标系。
     *
     * 如果target为null, x,y 在link父对象的本地坐标系。
     *
     * @param x
     * @param y
     * @param target
     */
    constructor(x: number, y: number, target?: DisplayObject);
}
/**
 * 端点：函数
 * @deprecated 已过时，未来将移除
*/
declare class EndpointFunction extends Endpoint {
    className: string;
    fn: Function;
    constructor(fn: Function);
    toJSON(): {
        className: string;
        x: any;
        y: any;
    } & this;
}
/**@ignore */
export declare function convertToEndpoint(target: LinkTarget, positionName?: Endpoint | string): Endpoint;
/**
 * @ignore
 * 获取连接点的方向向量，如果连接对象为Node时才有，否则返回null
 * @param {*} connInfo  link的begin或者end
 * @returns
 */
export declare function getEndpointNormal(endpoint: any): any;
export { Endpoint, EndpointFixedPoint, EndpointFixedName, EndpointNearest, EndpointSegment, EndpointFunction, };
