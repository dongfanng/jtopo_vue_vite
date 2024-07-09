import DisplayObject, { PickType } from './DisplayObject';
import { PointLike, RectPosition } from './jtopo_type';
import Rectangle from './Rectangle';
import { Shape } from './geom/Shape';
import Transform from './Transform';
export type DrawContentDesc = {
    hasBorder: boolean;
    hasBackgroundColor: boolean;
    hasBackgroundImage: boolean;
    hasShape: boolean;
    hasImage: boolean;
    onlyImage: boolean;
    onlyText: boolean;
    shapeSize: {
        width: number;
        height: number;
    };
};
/**
 * 节点对象，形状为矩形；
 * 核心属性：坐标(x,y)和尺寸(width, height)
 * 创建一个节点, 通常有以下几种形式：

```js:line-numbers
import {Node} from '@jtopo/core';

let node = new Node();
let node = new Node('name');

// new Node('name', x, y);
let node = new Node('name', 10, 10);

// new Node('name', x, y, width, height);
let node = new Node('name', 10, 10, 30, 30);

// 尺寸
node.resize(40, 40);

// 位置(中心)
node.x = 100;

// 位置
node.left = 100;
node.bottom = 100;

node.setImage('./img/abc.png');

```
 *
 */
export declare class Node extends DisplayObject {
    readonly className: string;
    shape: Shape;
    /**
     * 对齐原点的位置: center
     */
    originAlignPosition?: RectPosition;
    get originAutoRotate(): boolean;
    set originAutoRotate(v: boolean);
    /** 是否跟随父节点旋转 */
    rotateWithParent: boolean;
    /**
     * @protected
     * 旋转位置，默认null
     */
    rotateCenter: RectPosition;
    /**
     * @protected
     */
    originOffset: number;
    /**
     * @ignore
     * 节点文本
     * <p>多行直接可以使用\n换行 </p>
     */
    _text: string;
    get text(): string;
    set text(v: string);
    /**@ignore */
    _textArr?: Array<string>;
    /**@ignore */
    _textDirty: any;
    /**@ignore */
    _textWidth: number;
    /**@ignore */
    _textHeight: number;
    /**@ignore */
    _textLineHeight: number;
    _image?: HTMLImageElement;
    /**
     * @since 2.5.0
     */
    get image(): HTMLImageElement;
    /**
     * @since 2.5.0
     */
    set image(v: HTMLImageElement);
    private _imageSrc;
    /**
     * 获取图片的src
     */
    get imageSrc(): string;
    /**
     * 使用src来设置图片
     */
    set imageSrc(v: string);
    /**
    * 是否是Node类的对象, 主要用于和Link区分
    */
    isNode: boolean;
    /**@ignore */
    _zIndex: number;
    /**
     * 文本的旋转角度，相对于节点
     */
    textRotation: number;
    private _textPosition?;
    /**
     * @protected
     * shape投射到节点内的顶点, 当节点尺寸变化后更新
     */
    _shapePoints: Array<PointLike>;
    /**
     * 总会被序列化的属性列表
     */
    allwaysSerializers: Array<string>;
    /**
    * 序列化属性列表
    */
    serializers: Array<string>;
    getCtrlPoints: Function;
    getAnchorPoints: Function;
    pickType: PickType;
    /**@protected */
    _drawContentDesc: DrawContentDesc;
    /**@protected */
    obbPoints: {
        x: number;
        y: number;
    }[];
    /**@protected 原点位置（在父节点中）*/
    _originInParent: PointLike;
    /**
     * 所有参数可以为空，通过其他方法按需设置
     * @param text 文本
     * @param x 坐标x
     * @param y 坐标y
     * @param width 宽度
     * @param height 高度
     */
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    /**
     * 设置坐标原点
     *
     * 已过时，未来可能删除，请使用 setXYOnLink(lineSegmentIndex, t) 替代
     * 只有Node节点才有setXYOnLink() 方法
     *
     * @deprecated 已过时，
     */
    setOrigin(lineSegmentIndex: number, t: number): this;
    /**
     * 将节点定位到连线的某个位置上，该位置随连线变化而变,
     * @since 2.4.0
     * @param lineSegmentIndex
     * @param t
     */
    setXYOnLink(lineSegmentIndex: number, t: number): this;
    /**
     * 设置节点的形状
     * @param shape
     */
    setShape(shape: Shape): void;
    /**
     * 设置附着在Link上的位置，只有父节点是Link时有效
     *
     * 例如：
```js
    // 将节点的 center 位置 始终对齐父对象（Link的时候）上 第1条线段的中心(0.5), 线段当前方向偏移2像素的距离
    node.alignOriginToLink('center', 0, 0.5, 2);

```
     * @param position 自身位置
     * @param segIndex Link上线段索引
     * @param t Link上的位置（百分比)
     * @param originOffset 偏移量（沿着线段当前方向）
     */
    alignOriginToLink(position: RectPosition, segIndex?: number, t?: number, originOffset?: number): void;
    /**
     * 将某一个位置对齐到父对象(父对象为Node的时候) 的某个位置上
     * @param position
     * @param parentPosition 默认为'center'
     */
    alignOriginToNode(position: RectPosition, parentPosition?: RectPosition): void;
    /**
     * 返回参与包围盒计算的坐标, 对于Node就是最外层矩形,
     * 只和尺寸有关
     * @override
     * @protected
     */
    _OBBPoints(): {
        x: number;
        y: number;
    }[];
    /**@protected */
    _afterStyleComputed(): void;
    /**@protected */
    _afterUpdateMatrix(): void;
    /**@protected */
    _afterUpdate(): void;
    /**@protected */
    _calc_originInParent(): number[];
    /**@protected */
    _calcOriginInParentLink(): number[];
    /**@protected */
    _getOriginRotation(): number;
    /**@protected */
    _doTransform(transform: Transform | CanvasRenderingContext2D): void;
    /**@protected */
    _updateShapeSize(): void;
    getSegmentPoints(): Array<PointLike>;
    /**
     * 获取图片，注意图片的加载是异步
     *
     * 图片如果不存在或者加载失败image为null
```js
node.getImage().then(function(image){
    if(image == null){
        return;
    }
    console.log(image);
})
```
     *
     */
    getImage(callback?: Function): Promise<HTMLImageElement | null>;
    /**
     * 设置图片
     * @param imgObj 图片对象(Image)、图片路径、或者Canvas
     */
    setImage(imgObj: string | HTMLImageElement | HTMLCanvasElement, fitSize?: boolean): this;
    setText(v: string): void;
    protected _calcTextSize(): void;
    /**
     * 属性设置
     * @param attr
     * @returns
     */
    protected attr(attr: any): void;
    /**
     * 调整尺寸到图片的实际大小
     */
    resizeToFitImage(): void;
    drawShape(ctx: any): void;
    private _drawBackgroundOrBorder;
    protected _drawImage(ctx: any, img: any, hasBorder: any, hasBackgroundColor: any, borderWidth: any): void;
    protected _strokeAndFill(ctx: any): void;
    /**
     * @override
     * @param ctx
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /**@protected */
    _updateText(): void;
    /**@protected */
    _calcTextPosition(borderWidth?: number, padding?: number): any;
    /**@protected */
    _paintText(ctx: any): PointLike;
    getLinkChildren(recursive: any): any[];
    nearest(x: number, y: number): any;
    setRotateCenter(position: RectPosition): this;
    /**
     * 增量平移对象, 在对象原有的坐标基础上，增加偏移(dx,dy)。相当于: x += dx; y += dy。
     * @param  dx
     * @param  dy
     * @return {void}
     */
    translateWith(x: number, y: number): this;
    translateTo(x: number, y: number): this;
    /**
    * 平移对象，与setXY()完全等价
    *
    * 只是从图形的语义上平移更接近本质：有相对性的意识
    *
    * @param  x
    * @param  y
    */
    translate(x: number, y: number): this;
    /**
     * 设置坐标， translate的简写
     * @param x
     * @param y
     */
    setXY(x: number, y: number): this;
    /**
     * 平移对象上的的某个位置到指定位置(x,y),整个对象随之移动
```js
    // 平移节点的右上角到 100,100 处
    node.translatePositionTo('rt', 100, 100);
```
     * @param positionName
     * @param x
     * @param y
     */
    translatePositionTo(positionName: string, x: number, y: number): void;
    resizeTo(width: number, height: number): this;
    /**
    * 设置尺寸
    * @param width 宽度
    * @param height 高度
    */
    resize(width: number, height: number): this;
    /**
     * 错切
     * @param skewX
     * @param skewY
     * @returns
     */
    skew(skewX: number, skewY: number): this;
    /**
     * 原有尺寸基础上增加
     * @param w
     * @param h
     * @returns
     */
    resizeWith(w: number, h: number): this;
    scaleBy(x: any, y: any): this;
    /**
     * 以中心点cx，cy做缩放
     * @param sx 水平缩放
     * @param sy 垂直缩放
     * @param cx 中心x
     * @param cy 中心y
     */
    zoom(sx: number, sy: number, cx?: number, cy?: number): this;
    /**
     * 缩小到0.8
     */
    zoomOut(): this;
    /**
     * 放大到1.25
     */
    zoomIn(): this;
    scaleTo(x: number, y: number): this;
    /**
     * 缩放
     * @param sx 水平缩放系数
     * @param sy 垂直缩放系数
     */
    scale(x: number, y: number): this;
    /**
     * 旋转
     * @param angle 旋转角度（弧度）
     */
    rotateTo(angle: number): this;
    /**
     * 旋转
     * @param angle 旋转角度（弧度）
     */
    rotate(angle: number): this;
    /**
     * 旋转-增量性
     * @param angle 旋转角度（弧度）
     */
    rotateWith(angle: number): this;
    getRect(): Rectangle;
    /**
     * @override
     * 获取对象上某一点
     * @param t [0-1] 在线段上的比例
     * @param segIndex 线段索引(Node是矩形，有4条线段，索引：[0-3]）可选项
     */
    getPoint(t: number, segIndex?: number): PointLike;
    /**
     * 修改父对象但保持屏幕坐标不变
     * @param newParent
     * @returns
     */
    changeParent(newParent: DisplayObject): this;
    /**
     * 将坐标原点设置到父的某个位置上
     * @param name
     * @returns
     */
    setOriginToPosition(name: string): this;
    /**
     * 得到对象内部位置坐标（参照左上角为0，0）
     * @param  name 位置名称
     * @param  x name为nearest时需要
     * @param  y name为nearest时需要
     */
    positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
    getPositionNormal(name: string): number[];
    toJSON(indexInfo?: any): import("./jtopo_type").SerializedDisplayObject;
    destory(): void;
}
export { Node as default };
