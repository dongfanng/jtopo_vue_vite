import { DisplayObject } from './DisplayObject';
import { Endpoint, LinkTarget } from './Endpoint';
import Node from './Node';
import { ConnectPosition, PointLike, Vec2 } from './jtopo_type';
import { Shape } from './geom/Shape';
import { Transform } from './Transform';
import { ObjectIndexInfo } from './toJSON';
import { LinkPath } from './LinkPath';
type DrawContentDesc = {
    hasBorder: boolean;
    hasBackgroundColor: boolean;
};
/**
 * 连线对象，有起点和终端;
 *
 * 创建和设置起止，
 * 有以下形式:

```js:line-numbers
import {Link} from "@jtopo/core";

let link = new Link('text', 开始对象, 结束对象, 开始端点, 结束端点);

// 示例1
let link = new Link();
link.text = 'text';
link.setBegin(开始对象, 端点);
link.setEnd(结束对象, 端点);

// 示例2
let link = new Link('text', beginNode, endNode);
let link = new Link('text', beginNode, endNode, 'center', 'center');
let link = new Link('text', beginNode, {x: 10, y:20}, 'center');
let link = new Link('text', {x: 10, y:20}, endNode, 'center');
let link = new Link('text', {x:0, y:0}, {x: 10, y:20});

```
 */
export declare class Link extends DisplayObject {
    readonly className: string;
    /**
     * link相关点坐标集合，link父对象为参考坐标系
     */
    points: Array<PointLike>;
    protected unitPoints: Array<PointLike>;
    private _text?;
    /**
     * 路径
     */
    protected path: LinkPath;
    shape: Shape;
    /**
     * 连线中间的的文本对象(Node), 可能为空.
     *
     * 只有第一次为link.text赋值后，label对象就不为空了。
     *
     * link.text和 node.text 有差异：
     * 1. text 在 Node对象中是一个简单的 字符串属性
     * 2. text 在 Link对象中，是 get/set函数，来修改和读取link.label对象的text属性
     *
     * link.label.text = '123'; 的简写就是：link.text = '123';
     */
    label?: Node;
    /**
     * 开始箭头对象
     */
    beginArrow?: Node;
    /**
     * 结束箭头对象
     */
    endArrow?: Node;
    /**
     * 连线的开始对象
     */
    get begin(): Endpoint;
    /**
     * 连线的结束对象
     */
    get end(): Endpoint;
    /**
     * 开始的偏移
     */
    private beginOffset?;
    /**
     * 结束的偏移
     */
    private endOffset?;
    protected offsetPoints?: Array<PointLike>;
    /**
     * @protected
     * zIndex 控制显示前后排序
     * <p>Link默认为1, Node默认为2，Link默认绘制在Node的后面</p>
     */
    _zIndex: any;
    /**
     * @protected
     * 是否是Link类的对象, 主要用于和Node区分
     */
    isLink: any;
    /**@protected */
    _pickRadius: any;
    DefaultPositions: any;
    /**
     * 总会被序列化的属性列表
     */
    allwaysSerializers: Array<string>;
    serializers: Array<string>;
    getAnchorPoints: Function;
    getCtrlPoints: Function;
    /**@protected */
    _drawContentDesc: DrawContentDesc;
    /**
     * @constructor
     * @param text 文本
     * @param begin 开始对象
     * @param end  结束对象
     * @param beginEndpointName 开始节点对象的‘定位点’, 可为空，默认为"center"
     * @param endEndpointName  结束节点对象的‘定位点’, 可为空，默认为"center"
     */
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    /**
     * 文本节点的text别名
     *
     * link.text和 node.text 有差异：
     * 1. text 在 Node对象中是一个简单的 字符串属性
     * 2. text 在 Link对象中，是 get/set函数，来修改和读取link.label对象的text属性
     *
     * link.label.text = '123'; 的简写就是：link.text = '123';
     *
     * 如果link.text为null， link.label 对象也为null.
     */
    get text(): string;
    set text(v: string);
    /**
     * 设置文本标签
     * <p>
     * </p>
     * @param textOrNode 文字或者Node对象
     */
    setLabel(textOrNode: string | Node): Node | this;
    /**
     * 已过时，即将删除
     * @deprecated
     */
    attr(attr: any): void;
    getLabel(): Node;
    /**
     * 获取开始箭头对象
     */
    getBeginArrow(): Node;
    /**
     * 设置开始端的箭头
     */
    setBeginArrow(node: Node): this;
    /**
     * 获取结束箭头对象
     */
    getEndArrow(): Node;
    /**
     * 设置结束端的箭头
     * @param node
     */
    setEndArrow(node: Node): this;
    /**
     * @Override
     * @protected
     */
    _OBBPoints(): Array<PointLike>;
    /**
     * 设置连线的开始点
     * @param target 开始连接点对象，可以是Node、Link，也可以是一个简单的点, 甚至是一个函数，函数返回的对象必须有x、y属性。当时
     * @param positionName
     */
    setBegin(target: LinkTarget, positionName?: string): void;
    /**
     * 设置连线的结束点
     * @param target 连接对象，可以是Node、Link，也可以是一个简单的点，甚至是一个函数，函数返回的对象必须有x、y属性。
     * @param positionName 端点
     */
    setEnd(target: LinkTarget, positionName?: string): void;
    /**
     * 获取连线的开始点坐标
     */
    getBeginPoint(): PointLike;
    /**
     * 获取连线的结束点坐标
     */
    getEndPoint(): PointLike;
    /**
     * 已过时，请使用 drawShape 来替代
     * @deprecated
     * @param ctx
     * @returns
     */
    drawPoints(ctx: CanvasRenderingContext2D): void;
    /**@protected */
    drawShape(ctx: CanvasRenderingContext2D): void;
    /**@protected */
    _getTotalLineWidth(): number;
    /**
     * 绘制
     * @override
     */
    draw(ctx: CanvasRenderingContext2D): this;
    /**@protected */
    _afterStyleComputed(): void;
    /** 设置开始端的偏移量 */
    setBeginOffset(n: number): void;
    /** 设置结束端的偏移量 */
    setEndOffset(n: number): void;
    /**
     * 增量式平移
     * @override
     */
    translateWith(dx: number, dy: number): this;
    /**@protected */
    _calcAZ(): PointLike[];
    /**@protected 是否需要计算偏移（有箭头肯定需要） */
    _needCalcOffset(): boolean;
    private _offsetA;
    private _offsetZ;
    private _setOffsetByVec;
    /**@protected 还没更新就需要读取points */
    _notUpdateYet(): void;
    /**@protected */
    _afterUpdateMatrix(): void;
    private _offsetAndArrowHandle;
    updatePoints(): any[];
    getPoints(): PointLike[];
    /**
     * @Override
     */
    getTransform(): Transform;
    /**@protected */
    _doTransform(): void;
    nearest(x: number, y: number): import("..").Intersect | {
        x: number;
        y: number;
    };
    getSegmentPoints(): PointLike[];
    upgradeParent(): any;
    /**@protected 计算开始箭头的方向(单位向量) */
    getBeginArrowDirection(): Vec2;
    /**@protected 计算结束箭头的方向(单位向量) */
    getEndArrowDirection(): Vec2;
    isAlone(): boolean;
    /**@protected */
    isBeginDisplayObject(): boolean;
    /**@protected */
    isEndDisplayObject(): boolean;
    unlinkBegin(): void;
    unlinkEnd(): void;
    /**
     * 断开开始和
     */
    unlink(): void;
    remove(): this;
    changeParent(newParent: DisplayObject): this;
    /**@protected */
    positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
    toJSON(indexInfo?: ObjectIndexInfo): import("./jtopo_type").SerializedDisplayObject;
    /**@protected */
    _updateBeginEndAfterJson(linkPojo: any, objIndexMap: any): void;
    protected _setEndpoints(endpoints: any): void;
    destory(): void;
}
/**@ignore */
export declare function getPointByEndpoint(link: Link, endpoint: Endpoint): PointLike;
export { Link as default, };
