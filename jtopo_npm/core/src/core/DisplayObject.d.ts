import EventTarget from './EventTarget';
import Rectangle, { OBB } from './Rectangle';
import { Style } from './Style';
import Transform from './Transform';
import { PointLike, SerializedDisplayObject, StyleOptions, Vec2 } from './jtopo_type';
import { InputEvent } from './EventUtils';
import { Link } from './Link';
import { InputSystem } from './InputSystem';
/**
 *
 * 鼠标拾取方式（节点内容:shape，还是整个节点矩形区域: rect)
 */
export type PickType = 'shape' | 'rect';
/**@ignore */
export declare let touchstartEvent: InputEvent;
/**@ignore */
export declare let touchmoveEvent: InputEvent;
/**@ignore */
export declare let touchendEvent: InputEvent;
/**@ignore */
export declare let mousedownEvent: InputEvent;
/**@ignore */
export declare let mouseupEvent: InputEvent;
/**@ignore */
export declare let mousemoveEvent: InputEvent;
/**@ignore */
export declare let mouseoverEvent: InputEvent;
/**@ignore */
export declare let clickEvent: InputEvent;
/**@ignore */
export declare let dblclickEvent: InputEvent;
/**@ignore */
export declare let mouseenterEvent: InputEvent;
/**@ignore */
export declare let mouseoutEvent: InputEvent;
/**@ignore */
export declare let mousedragEvent: InputEvent;
/**@ignore */
export declare let dragEvent: InputEvent;
/**@ignore */
export declare let dragEndEvent: InputEvent;
/**@ignore */
/**@ignore */
export declare let dropoverEvent: InputEvent;
/**@ignore */
export declare let dropEvent: InputEvent;
/**@ignore */
export declare let dropoutEvent: InputEvent;
/**@ignore */
export declare let selectedEvent: InputEvent;
/**@ignore */
export declare let unselectedEvent: InputEvent;
/**
 * 显示对象, Node、Link的父类
 */
export declare abstract class DisplayObject extends EventTarget {
    readonly className: string;
    /**
     * 唯一标志，系统自动维护、不能有重复、不要修改。
     *
     * 尽量不依赖该属性, 可以使用给开发人员预留的三个自定义属性：name、type、data
     *
     * @protected
     */
    readonly id = 0;
    /**
     * 名称，可以在编辑时指定，运行时通过名称获取对象的引用
     */
    name?: string;
    /**
    * 类型，自定义类型
    *
    * 可用于自定义节点，区分节点类型
    *
    * 比用data属性更方便一点
    *
    * @since 2.4.0
    */
    type?: string;
    z: number;
    /**
     * 是否是Node对象
     */
    isNode: boolean;
    /**
     * 是否是Link对象
     */
    isLink?: boolean;
    isLayer?: boolean;
    /**
     * 上级对象
     */
    parent?: DisplayObject;
    /**
     * 子节点集合
     */
    readonly children: DisplayObject[];
    /**
     * @protected
     * 坐标x
     */
    _x: number;
    /**
     * @protected
     * 坐标y
     */
    _y: number;
    /**@protected 宽度 */
    _width: number;
    /**
     * @protected
     * 高度
     */
    _height: number;
    /**@protected */
    transform: Transform;
    /**@protected */
    _worldTransform: Transform;
    /**
     * @protected
     * 旋转角度
     */
    _rotation: any;
    /**
     * 水平缩放系数
     */
    protected _scaleX: number;
    /**
     * 垂直缩放系数
     */
    protected _scaleY: number;
    protected _skewX: number;
    protected _skewY: number;
    /**
     * 样式
     */
    style: Style;
    /**
     * 层叠样式计算后的
     *
     * 主题、自定义样式类、css方法设置三者叠加后的最终结果
     *
     * 只读，不要修改
     */
    readonly _computedStyle: Style;
    /**
     * 通过addClass添加的样式名称列表
     */
    readonly classList: Array<string>;
    /**
    * 选中时的样式，如果不设置将使用默认的
    */
    selectedStyle?: Style;
    /**
     * 鼠标拾取方式（节点内容，还是整个节点矩形区域)
     */
    pickType: PickType;
    /**
     * 跳过实际的paint，其他流程不变
     *
     * 对相机来说是否可见
     * @protected
     * */
    _cameraVisible: boolean;
    /**@protected */
    matrixDirty: boolean;
    paintSelected?: Function;
    /**
     * @protected
     * 如果对象超出了视口(画布), 下面的子节点是否还考虑绘制, 默认：仍旧尝试绘制
     */
    paintChildrenWhenOutOfViewport: boolean;
    /**@protected 是否超出了'视口'(画布) */
    _isOutOfViewport: boolean;
    /**
     * 本地坐标系的原点，采用单位化坐标， 默认为[0,0], 父对象的中心
     */
    origin: Array<number>;
    /**
     * @protected
     * 节点上的位置信息
     */
    positions: any;
    /** 是否绘制到了最后一帧：是否在当前最新的画布上 */
    painted: boolean;
    /**@protected  */
    isPointOn: boolean;
    /**@protected 鼠标是否位于该节点的aabb上 */
    _isMouseInAABB: boolean;
    /**@protected 绘制状态, 除相机因素外，其他可见性判断 */
    _needPaint: boolean;
    /**
     * @protected
     * 鼠标选中线的精度, 默认为5，是否精准才能选中, 数值越大鼠标越好选中
     */
    _pickRadius: number;
    /**
    * 为了安全考虑，防止与对象属性冲突,用户最好使用该对象
    * 用户附加到该对象的自定义属性
    * @since 2.4.0
    */
    data?: any;
    /** @deprecated 已过时，请使用更简短的：data 属性替代 */
    set userData(v: any);
    /** @deprecated 已过时，请使用更简短的：data 属性替代 */
    get userData(): any;
    /**@protected  Layer层面的OBB*/
    _obb: OBB;
    /**
     * 所有以本对象为结束点的Link对象数组
     */
    inLinks: Array<Link>;
    /**
    * 所有以本本对为开始点的Link对象数组
    */
    outLinks: Array<Link>;
    destroyed: boolean;
    /**
     * 序列化属性列表
     */
    serializers: Array<string>;
    /**
     * 总会被序列化的属性列表
     */
    allwaysSerializers: Array<string>;
    /**
     * @protected
     * zIndex显示前后排序
     * <p>Node默认为2，Link默认为1, Link默认绘制在Node的后面</p>
     */
    _zIndex: number;
    /**
     * 是否冻结（所有下级子节点）
     *
     * 冻结后鼠标拾取到子节点或者本节点都视为拾取了本节点
     */
    frozen: boolean;
    /**
     * 层级深度, Layer为0，下面第一层子节点为1，依次类推
     */
    deep: number;
    /**@protected */
    _visible: boolean;
    get visible(): boolean;
    set visible(v: boolean);
    /**
    * 是否显示选中的效果，默认显示
    */
    showSelected: boolean;
    /**
    * 是否可序列化，默认true
    * 如果为false，序列化时将跳过该对象
    */
    serializeable: boolean;
    /**
    * 是否可连线，仅仅编辑模式有意义
    */
    connectable: boolean;
    /**
     * 是否响应鼠标，为false的时候，不响应鼠标的动作
     */
    mouseEnabled: boolean;
    /**
     * 是否可拖拽
     */
    draggable: boolean;
    /**
     * 是否被选中了
     */
    isSelected: boolean;
    /**
     * 是否可以调整角度、尺寸，仅仅编辑模式有意义
     */
    editable: boolean;
    /**
     * 是否可以作为拖拽目标
     * @since 2.4.0
     */
    dropAllowed: boolean;
    constructor();
    /**
     * @protected
     * 参与包围盒计算的点, local
     */
    abstract _OBBPoints(): Array<PointLike>;
    /**
     * 绘制具体内容
     */
    abstract draw(ctx: CanvasRenderingContext2D): any;
    /**
     * 得到对象内部位置坐标（参照左上角为-this.widht/2，-this.height/2, 0, 0 为中心）
     * @param  name 位置名称
     * @param  x name为nearest时需要
     * @param  y name为nearest时需要
     */
    abstract positionToLocalPoint(name: string, x?: number, y?: number): PointLike;
    abstract translateWith(dx: number, dy: number): any;
    /**
     * 修改父对象但保持屏幕坐标不变
     * @param newParent
     */
    abstract changeParent(newParent: DisplayObject): any;
    abstract getSegmentPoints(): Array<PointLike>;
    /**@protected */
    _afterUpdate(): void;
    /**
     * 获取对象在Layer中的aabb包围盒
     * @param recursive 是否将子节点包含在内
     * @returns
     */
    getAABB(recursive?: boolean): Rectangle;
    /**@protected */
    dragHandler(inputSystem: InputSystem): void;
    transformPoint(p: PointLike): {
        x: number;
        y: number;
    };
    getTransform(): Transform;
    /**@protected */
    abstract _doTransform(transform: Transform | CanvasRenderingContext2D): any;
    /**
     * 读取某个样式的值
     */
    getStyle(name: string): any;
    /** 判断是否可见 */
    isVisible(): boolean;
    /**
     * 背景和边框的设置语法参考css样式, 图形绘制的语法使用cavnas属性设置，如下:
```js
    node.css({
        border: 'solid 1px gray',
        borderRadius: 5,
        font: 'bold 11px arial',
        color: 'gray',
        textPosition: 'center',
        textAlign: 'center',
        textBaseline: 'middle',
    });
```
     * @param  styleOption
     */
    css(styleOption: StyleOptions | string, value?: any): this;
    /**
     * 完全等价于css 方法
     */
    setStyles(styleOpt: StyleOptions, value?: any): this;
    /**
     * 获取指定对象样式层叠计算后的样式(只读，不要修改返回的对象)
     * @param obj
     * @returns
     */
    getComputedStyle(obj: DisplayObject): Style;
    /**
     * 清除通过css或setStyles定义的所有样式
     */
    clearCss(): void;
    /**
     * 增加一个样式
```js
    obj.addClass('.focus');
```
     * @param styleName
     */
    addClass(styleName: string): void;
    /**
     * 移除一个样式
```js
    obj.removeClass('.focus');
```
     * @param styleName
     */
    removeClass(styleName: string): void;
    /**
     * 检测是否拥有某个样式类
```js
    node.hasClass('.focus');
```
     * @param styleName
     * @since 2.4.0
     */
    hasClass(styleName: string): boolean;
    /**
 * 移除所有通过addClass添加的样式
```js
obj.removeAllClass();
```
    */
    removeAllClass(): void;
    /**@protected 获取映射到Layer坐标系的变换, 注意：如果对象或父对象不在Layer中没意义的，存在错误 */
    _getTransformByDeep(deep: number): any;
    getWorldTransform(): any;
    getStageTransform(): any;
    /**
     * 是否被任意Link连接到
     * @since 2.4.0
     * */
    isConnected(): boolean;
    /**
     * 显示
     */
    show(): this;
    /**
     * 隐藏
     */
    hide(): this;
    /**@protected */
    mousePickupPath(ctx: any, path?: any): void;
    /**@protected */
    mousePickupStroke(ctx: any, pickRadius?: any): void;
    /**
     * 设置用户自定义数据
     * <p>直接在节点对象上增加属性不是稳妥的方法，若要向节点增加额外的属性，应该调用此方法</p>
     *
     * @deprecated 已过时，直接访问 data 即可
     */
    setUserData(data: any): this;
    /**
     * 读取用户自定义的数据
     */
    getUserData(): any;
    /**
     * 移除用户自定义的数据
     * @deprecated 已过时，直接设置 data 为空对象或者null 即可
     */
    removeUserData(): this;
    /**
     *
     * 定义一个位置
     * @protected
     * @param name
     * @param fun
     */
    definePosition(name: number, fun: Function): void;
    /**
     * 获取本对象上定义的所有位置名称
     */
    getPositionNames(): string[];
    /**
     * 获取对象上某一点
     * @param t [0-1] 在线段上的比例
     * @param segIndex 线段索引(Node是矩形，有4条线段，索引：[0-3]）可选项
     */
    getPoint(t: number, segIndex?: number): PointLike;
    /**
     * 获取对象边框或者线上某一点(本地坐标系)
     */
    getLocalPoint(t: number, segIndex?: number): PointLike;
    /**
     * @protected
     * 根据属性和值来查找子节点
     * @param propertyName 属性名称
     * @param value 值
     * @param recursive 是否递归式
     * @returns
     */
    _findChildren(propertyName: string, valueOrFn: any, recursive?: boolean): Array<DisplayObject>;
    /**
     * 对象选择器
     *
     * 语法兼容DOM的Selector API标准（并不支持标准里的所有语法）
     *
     * 支持的语法形式如下：
```js

    //obj.querySelector(类名称)， 例如:
    let circleNodes = layer.querySelectorAll('CircleNode');
    let links = layer.querySelector('Link');

    //obj.querySelector(样式名称)，例如:
    let serverNodes = layer.querySelectorAll('.server');
    let activedObjs = layer.querySelectorAll('.active');

    let arr = layer.querySelectorAll((e)=>e.x > 20 && e.y < 100);

    //obj.querySelector(ID);
    let obj = layer.querySelectorAll('#123')[0];

    //obj.querySelector([属性名称=""]);
    let arr = layer.querySelectorAll('[text="abc"]');
    let arr2 = layer.querySelectorAll('[draggable=true]');

    // obj.querySelector(类名称|样式名称[属性名称=""]);
    let obj = layer.querySelector('TextNode[x<=-200]');
    let obj2 = layer.querySelector('.server[text="X86"]');
```
     * @param querySelector
     * @returns
     */
    querySelectorAll(querySelector?: string | Function): DisplayObject[];
    /**
     * 功能类似querySelectorAll,但只返回第一个满足条件的对象或者null
     * @param querySelector
     * @returns
     */
    querySelector(querySelector: string | Function): DisplayObject;
    /**
     * 递归式 获取所有节点对象
     * @returns 所有节点对象
     */
    getAllNodes(): Array<DisplayObject>;
    /**
     * 递归式 获取所有连线对象
     * @returns 所有连线对象
     */
    getAllLinks(): Array<DisplayObject>;
    /**@protected */
    touchstartHandler(e: any): void;
    /**@protected */
    touchendHandler(e: any): void;
    /**@protected */
    touchmoveHandler(e: any): void;
    /**@protected */
    mousedownHandler(inputSystem: any): void;
    /**@protected */
    mouseupHandler(inputSystem: any): void;
    /**@protected */
    mouseoverHandler(inputSystem: any): void;
    /**@protected */
    mousemoveHandler(inputSystem: any): void;
    /**@protected */
    mouseenterHandler(inputSystem: any): void;
    /**@protected */
    mouseoutHandler(inputSystem: any): void;
    /**@protected */
    dragEndHandler(inputSystem: any): void;
    /**@protected */
    clickHandler(inputSystem: any): void;
    /**@protected */
    dblclickHandler(e: any): void;
    /**@protected */
    dropHandler(inputSystem: any): void;
    /**@protected */
    dragoverHandler(inputSystem: any): void;
    /**@protected */
    dragoutHandler(inputSystem: any): void;
    /**@protected */
    selectedHandler(): void;
    /**@protected */
    unselectedHandler(): void;
    /**
     * 增加子对象
     */
    addChild(child: DisplayObject): this;
    /**
      * 设置zIndex
      * @param  index
      */
    setZIndex(index: number): void;
    /**
     * 请使用 setZIndex(Z大写)
     * @deprecated
     */
    setzIndex(index: number): void;
    updateZIndex(): void;
    /**
     * 请使用 upateZIndex(Z大写)
     * @deprecated
     * @returns
     */
    updatezIndex(): void;
    /**@protected */
    updateChildrenDeep(recursive?: boolean): void;
    /**
     * 获取所有子对象
     */
    getChildren(): DisplayObject[];
    /**
     * 是否拥有子对象
     */
    hasChild(child: DisplayObject): boolean;
    hasChildren(): boolean;
    /**
     * 从父容器中移除
     */
    removeFromParent(): this;
    /**
     * removeFromParent的简写。
     *
     * 推荐使用语义更明确的：removeFromParent()来替代。
     */
    remove(): this;
    /**
     * 一次性增加多个对象, 比单个增加速度快多，数量越多越明显！
     *
     * 但是：互为子节点、重复添加的情形需要开发者来确保避免。
     */
    addChilds(childs: Array<DisplayObject>): void;
    /**
     * 移除一个子对象
     */
    removeChild(child: DisplayObject): this;
    /**
     * 移除多个子对象
     */
    removeChilds(childs: Array<DisplayObject>): this;
    /**
     * 移除所有子对象
     */
    removeAllChild(): this;
    /**
     *隐藏所有下级节点
    */
    hideAllChild(): void;
    /**
     * 显示所有下级节点
     */
    showAllChild(): void;
    /**
     *@protected
     * 替换一个子对象
     */
    replaceChild(child: any, newChild: any): void;
    /**@protected */
    getChildrenAABB(recursive: boolean): Rectangle;
    /**
     * 获取'root'对象, 沿着parent一直向上追溯
     */
    getRoot(): this;
    /**
     * @deprecated v2.5.0 后使用 screenToLocalXY 替代
     */
    stageToLocalXY(x: number, y: number): any;
    /**
     * 将一个屏幕坐标转换到本地坐标系
     * @param  x
     * @param  y
     */
    screenToLocalXY(x: number, y: number): any;
    /**
     * @deprecated v2.5.0 后使用 screenToLocalVec 替代
     */
    stageToLocalVec(vec: Vec2): Vec2;
    /**
     * 将一个屏幕坐标系下的向量转换到本地坐标系
     * @@since 2.5.0
     * @param  x
     * @param  y
     */
    screenToLocalVec(vec: Vec2): Vec2;
    /**
    * @deprecated v2.5.0 后使用 toSreenXY 替代
    */
    toStageXY(x: number, y: number): any;
    /**
     * 将一个本地坐标转到屏幕(实际是canvas)坐标系
     *
     * cavnas的左上角为0,0
     *
     * @since 2.5.0
     * @param  x
     * @param  y
     */
    toScreenXY(x: number, y: number): any;
    /**
     * @deprecated v2.5.0 后使用 toWorldXY 替代
     */
    toLayerXY(x: number, y: number): PointLike;
    /**
     * 将一个本地坐标转到世界坐标系
     * @since 2.5.0
     * @param  x
     * @param  y
     */
    toWorldXY(x: number, y: number): PointLike;
    /**@protected */
    toObjectLocalXY(x: number, y: number, object: DisplayObject): any;
    /**@protected */
    addInLink(link: Link): void;
    /**@protected */
    addOutLink(link: Link): void;
    /**@protected */
    removeInLink(link: Link): void;
    /**@protected */
    removeOutLink(link: Link): void;
    /**
     * 获取所有连接到本对象的Link
     */
    getLinks(): Array<Link>;
    /**@protected */
    getOBB(): OBB;
    /**@protected */
    updateMatrix(): void;
    /**
     * 矩阵更新后
     * @protected
     */
    _afterUpdateMatrix(): void;
    /**
     * 样式计算后
     * @protected
     */
    _afterStyleComputed(): void;
    /**@protected */
    _isMatrixDirty(): boolean;
    /**@protected */
    clearMatrixDirtyMark(): void;
    /**
     * @protected
     */
    getK(segIndex: number, t: number): number;
    /**@protected */
    upgradeLinks(): void[];
    /**
     * 是否超出了父节点的矩形区域
     */
    isOutOfParent(): boolean;
    /**@protected */
    getTopFrozenParent(): any;
    /**@protected */
    getAncestors(): any[];
    /**@protected */
    isAncestors(child: DisplayObject): boolean;
    /**
     * 是否可被拾取到，默认返回：mouseEnabled 属性
```js
    pickable() {
        return this.mouseEnabled;
    }
```
     * @returns
     */
    pickable(): boolean;
    /**
     * 将自己和下面所有子类递归式的展开，并生成一个 map:[key: id, value: DisplayObject]
     * @protected
     */
    toIdMap(): Map<number, DisplayObject>;
    /**
     *
     * 销毁，释放相关的资源引用,一旦销毁，对象不能再被访问，访问就会报错。
     *
     * 注意：销毁后，所有事件回调、动画、定时器等均不能再访问，否则会报错。
     */
    destory(): void;
    static flatten(arr: Array<DisplayObject>, cond?: Function, breadthFirst?: boolean): DisplayObject[];
    static getNoChildrensObjects(arr: Array<DisplayObject>): DisplayObject[];
    /**@protected */
    static _anyMatrixOrStyleDirty(obj: DisplayObject): boolean;
    toJSON(indexInfo?: any): SerializedDisplayObject;
    /**@protected */
    _afterFromJSON(objJson: any, resourcesMap: any, styleIndexMap: any, shapeIndexMap: any): void;
    set zIndex(v: number);
    get zIndex(): number;
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get width(): number;
    set width(v: number);
    get height(): number;
    set height(v: number);
    get rotation(): any;
    set rotation(v: any);
    get scaleX(): number;
    set scaleX(v: number);
    get scaleY(): number;
    set scaleY(v: number);
    get skewX(): number;
    set skewX(v: number);
    get skewY(): number;
    set skewY(v: number);
    /**@since 2.4.0 */
    get left(): number;
    set left(v: number);
    /**@since 2.4.0 */
    get right(): number;
    set right(v: number);
    /**@since 2.4.0 */
    get top(): number;
    set top(v: number);
    /**@since 2.4.0 */
    get bottom(): number;
    set bottom(v: number);
}
export { DisplayObject as default };
