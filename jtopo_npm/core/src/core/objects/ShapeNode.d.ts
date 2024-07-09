import { Node } from '../Node';
import { PointLike } from '../jtopo_type';
import { PickType } from '../DisplayObject';
import { Shape } from '../geom/Shape';
/**
 * 已过时，不再推荐使用。
 *
 * 节点对象，外轮廓形状为矩形, 内部图形通过一些列点坐标来确定。
```js
import {ShapeNode, NodeHelper} from '@jtopo/core';

// new Node('name', x, y, width, height);
var node = new ShapeNode('name', 10, 10, 30, 30);

// 设置节点内部的图形, 下面绘制一个三角形(将节点看做尺寸为1x1，坐标原点在 0,0处)
let points = [
    {x: -0.5, y:-0.5},
    {x: 0.5, y: 0},
    {x: -0.5, y: 0.5},
    {x: -0.5, y: -0.5}
];

node.setVertices(points);

// 使用NodeHelper，更方便的创建几何图形： 5边形
let points5 = Shape.polygon(5);
node.setVertices(points5);

// 几何图形: 菱形
let pointsDiamond = NodeHelper.diamond();
node.setVertices(pointsDiamond);

// 几何图形: y=cos(x) 曲线
let closed = false;
let pointsCos = NodeHelper.cos(0, 4*Math.PI, 0.2, closed);
node.setVertices(pointsCos);

// 自定义几何图形
function myShape(){
    let points = [];
    for(let i=0; i<10; i++){
        points.push({
            x: i,
            y: i*i * Math.sin(i)
        });
    }
    return points;
}
let points = NodeHelper.fun(myShape);
node.setVertices(points);

```
 * @deprecated
 */
export declare class ShapeNode extends Node {
    className: any;
    /**
     * 序列化属性列表
     */
    serializers: any;
    pickType: PickType;
    shape: Shape;
    /**
     * 投射到节点内的顶点
     */
    _shapePoints: Array<PointLike>;
    _preWidth: number;
    _preHeight: number;
    /**
     * 节点内部图形的旋转量 - 与节点自身的旋转不同
     */
    contentRotation: number;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    setShape(shape: Shape): void;
    setVertices(vertices: Array<PointLike>, isClose?: boolean): void;
    /**
     * 旋转节点内的形状 TODO: 要不要保留等比旋转?
     * @param angle 旋转度数（弧度）
     */
    rotateVertices(angle: number): void;
    _projectionShape(): void;
    getPoints(): PointLike[];
    getPositionNormal(name: any): number[];
}
export { ShapeNode as default };
