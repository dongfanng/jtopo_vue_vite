import { DisplayObject } from './DisplayObject';
import HandlerLayer from './HandlerLayer';
import EventTarget from './EventTarget';
import Toolbar from '../ui/Toolbar';
import { InputSystem } from './InputSystem';
import Keyboard from './Keyboard';
import SelectedGroup from './SelectedGroup';
import DebugPanel from './DebugPanel';
import { StageModeType } from './jtopo_type';
import Layer from './Layer';
import Overview from './Overview';
import Rectangle from './Rectangle';
import { AnimationSystem } from './Animation';
import { StyleSystem } from './StyleSystem';
import { RenderSystem } from './RenderSystem';
import { ExportSystem } from './ExporterSystem';
import { EffectSystem } from './EffectSystem';
import { BehaviourSystem } from '../behaviours/BehaviourSystem';
import { GraphSystem } from './geom/GraphSystem';
import { LayoutSystem } from './layout/LayoutSystem';
import { SerializerSystem } from './SerializerSystem';
import { LocalView } from './LocalView';
import { Node } from './Node';
import { Camera } from './Camera';
export type StageConfig = {
    /**
     * 是否启用drop，默认开启
     */
    dropAllowed: boolean;
};
/**
 * 顶层场景对象，下面可以有多个Layer, 一个Layer可以充当一个场景
 * <p>创建时需要一个dom对象，通常是一个div，来作为渲染目标。</p>

```js
const stage = new Stage(document.getElementById('divId'));
```
常用的一些方法:
```js

// 显示工具栏
stage.showToolbar();

// 隐藏工具栏
stage.hideToolbar();

// 放大
stage.zoomIn();

// 缩小
stage.zoomOut();

// 取消所有缩放
stage.cancelZoom();

// 画面大小自动铺满
stage.zoomFullStage();

// 自动居中画面到Stage的中心
stage.translateToCenter();

// 全屏（浏览器内)
stage.fullWindow();

// 全屏（铺满物理显示器)
stage.fullScreen();

// 导出图片
stage.saveImageInfo();
```
 */
export declare class Stage extends EventTarget {
    /** 版本号 */
    version: string;
    /**
     * 顶层dom元素, new Stage(...)时指定的Dom对象
     */
    domElement: HTMLElement;
    /**
     * 键盘抽象
     */
    keyboard: Keyboard;
    /** 编辑模式- @jtopo/editor 模块存在时才有意义 */
    editor?: any;
    /**
     * 加入Stage的Layer集合
     */
    children: Array<Layer>;
    /**
     * 当前选中的对象组(由鼠标点击 或者 框选)
     */
    selectedGroup: SelectedGroup;
    /**
     * 缩略图对象
     */
    overview: Overview;
    /**
    * 工具条
    */
    toolbar: Toolbar;
    /**
     * 宽度，随顶层的dom元素变化
     * */
    width: number;
    /**
     * 高度，随最顶层的dom元素变化
     */
    height: number;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 仅系统内部控制用，开发人员无需关注，也不要修改任何属性
     */
    handlerLayer: HandlerLayer;
    /**
     * 存放Layer的Dom对象，不要改动
     */
    layersContainer: HTMLElement;
    /**
     * 调试信息面板，打开后会在左上角显示鼠标坐标信息、选中对象的定位信息等
```js
    // 可以通过以下方法打开，方便调试
    stage.showDebugPanel();
```
     */
    debugPanel: DebugPanel;
    /**
     * 显示和操作模式，不同模式下的操作行为会有一些差别。
     *
     * 默认模式(normal)下, 鼠标左键选择对象，右键是拖拽画布;
     *
     * 框选模式（select）下，鼠标左键可以一次性框选多个对象
     *
     * 拖拽模式(drag)下，鼠标只能拖拽画布，不能选中对象;
     *
     * 查看模式（view）下，只能看，不能进行任何操作。
     *
     */
    mode: StageModeType;
    /** 是否已经销毁 */
    destoryed: boolean;
    /**
     * 输入系统对象，存储鼠标相关信息, 例如：
```js
    // 鼠标指针在画布上的位置-x
    let xInCanvas = stage.inputSystem.x;

    // 鼠标最后一次按下时的坐标
    let downX = stage.inputSystem.mouseDownX;

    // 当前鼠标是否在拖拽中
    let isDraging = stage.inputSystem.isDraging;
```
     */
    inputSystem: InputSystem;
    /**
     * 动画系统
     */
    animationSystem: AnimationSystem;
    /**
     * 特效系统
     */
    effectSystem: EffectSystem;
    /**
     * 布局控制系统
     */
    layoutSystem: LayoutSystem;
    /**
     * 图系统(图论相关)
     */
    graphSystem: GraphSystem;
    /**
     * 样式系统
     */
    styleSystem: StyleSystem;
    /**
     * 渲染
     */
    renderSystem: RenderSystem;
    /**
     * 已过时，请使用 exportSystem 来替代
     * @deprecated
     */
    exporterSystem: ExportSystem;
    /**
     * 导出系统
     */
    exportSystem: ExportSystem;
    /**
     * 行为控制系统
     */
    behaviourSystem: BehaviourSystem;
    /**
     * 序列化系统
     */
    serializerSystem: SerializerSystem;
    /**@protected */
    _resizeObserver?: ResizeObserver;
    /**@protected */
    _resizeTimer: any;
    /**
     * 当前相机
     */
    camera: Camera;
    /**@protected */
    localView: LocalView;
    /**
     * 资源加载系统
     */
    resourceSystem: any;
    config: StageConfig;
    Debug: {
        isDebug: boolean;
        showFPS: boolean;
        paintAABB: boolean;
        debugInfo: any;
        debugMode: () => void;
    };
    /**
     * 渲染目标Dom对象（或dom对象的id）
     * @param rendererDom
     */
    constructor(rendererDom: HTMLElement | string, config?: StageConfig);
    /**@protected */
    injectCss(): void;
    private _init;
    /**
     * 显示左上角的调试信息
     */
    showDebugPanel(): void;
    /**
     * 隐藏左上角的调试信息
     */
    hideDebugPanel(): void;
    /**
     * 显示缩略图 （所在div的css属性position为 absolute）
     * 可通过css样式来定位，例如：
```js
 stage.showOverview({
        left: 0,
        bottom: -1
    });
```
     */
    showOverview(styles: any): void;
    private _updateOverview;
    /**
     * 隐藏缩略图
     */
    hideOverview(): void;
    /** 获取工具栏高度 */
    getToolbarHeight(): number;
    /**
     * 缩小到原来尺寸的80%
     * @deprecated 请使用 stage.camera.zoomOut()
     */
    zoomOut(s?: number): this;
    /**
     * 放大到原来尺寸的125%
     * @deprecated 请使用 stage.camera.zoomIn()
     */
    zoomIn(s?: number): this;
    /**
     * 放大到原来尺寸的125%
     * @deprecated 请使用 stage.camera.zoomBy()
     */
    zoom(sx: number): void;
    /**
     * 取消stage下所有Layer的缩放和偏移量
     * @deprecated 请使用 stage.camera.cancelZoom()
     */
    cancelZoom(): void;
    /**
     * 缩放到画布1：1并居中
     */
    zoomFullStage(): void;
    /**
     * 居中显示
     */
    translateToCenter(): void;
    /**
     * 创建一个Layer并加入到Stage
     *
     * @since 2.4.0
     * @param name
     * @returns
     */
    createLayer(name?: string): Layer;
    /**
     * 加入一个Layer
     *
     * Layer如果设置了背景，可能会遮挡住下面的Layer。
     */
    addChild(layer: Layer): void;
    /**@protected */
    updateZIndex(): void;
    /**
     * 获取所有子节点(所有Layer构成的数组)
     */
    getChildren(): Layer[];
    /**
     * 移除一个Layer
     * @param layer
     */
    removeChild(layer: Layer): this;
    /**
     * 显示
     */
    show(): void;
    /**
     * 图像不可见（脚本和动画仍然在执行）
     */
    hide(): void;
    /**
     * 更新，重绘一次
     */
    update(): void;
    forceUpdate(): void;
    /**
     * 获取整个Stage的图像数据，Base64编码
     *
     * 例如： data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby...
     * @returns
     */
    toDataURL(): string;
    /**
     * 导出成图片，并在浏览器新标签页打开
     */
    saveImageInfo(): void;
    /**
     * 导出图片（png）, 并下载到本地
     */
    saveAsLocalImage(): void;
    /**
     * 增加事件监听
     */
    on(type: string, callback: Function): void;
    /**
     * 在浏览器窗口内全屏
     */
    fullWindow(): void;
    /**
     * 整个浏览器全屏
     */
    fullScreen(): void;
    /**
     * 显示工具条
     */
    showToolbar(): void;
    /**
     * 隐藏工具条
     */
    hideToolbar(): void;
    setToolbar(toolbar: any): void;
    /**
     * 设置场景模式,模式有：normal（默认值)、select(框选)、edit(编辑)、drag(拖拽)
     *
     * 触发 'modeChange'事件，可捕获
     * @param mode 场景模式
     */
    setMode(mode: StageModeType): void;
    /**@protected */
    dropHandler(event: MouseEvent): void;
    /**@protected */
    dragoverHandler(): void;
    /**@protected */
    mouseoverHandler(): void;
    /**@protected */
    mousedownHandler(event: MouseEvent): void;
    /**@protected */
    static findDropToObjec(obj: DisplayObject, nodesList: Array<Node>): Node;
    /**@protected */
    mousedragHandler(event: MouseEvent): void;
    /**@protected */
    mouseupHandler(event: MouseEvent): void;
    /**@protected */
    mouseoutHandler(event: MouseEvent): void;
    /**@protected */
    clickHandler(event: MouseEvent): void;
    /**@protected */
    dblclickHandler(event: MouseEvent): void;
    /**@protected */
    mousemoveHandler(event: MouseEvent): void;
    /**@protected */
    mousewheelHandler(event: any): void;
    /**@protected */
    mouseenterHandler(event: MouseEvent): void;
    /**@protected */
    touchstartHandler(event: MouseEvent): void;
    /**@protected */
    touchmoveHandler(event: TouchEvent): void;
    /**@protected */
    touchwheelHandler(event: MouseEvent): void;
    /**@protected */
    touchendHandler(event: MouseEvent): void;
    /**@protected */
    pickUpViewLayers(): DisplayObject;
    /**
     * 获取当前光标, 相当于读取: cavnas.style.cursor;
     */
    getCursor(): string;
    /**
     * 设置光标, 相当于: cavnas.style.cursor = cursor;
     * @param cursor
     */
    setCursor(cursor: string): void;
    /**
     * 下载为json文件
     */
    download(fileName: string, content: string): void;
    /**
     * 选中指定的对象
     */
    select(objects: Array<DisplayObject>): void;
    /**
     * 获取当前可见的第一个Layer，默认是第一个
     */
    getCurrentLayer(): Layer;
    /**@deprecated */
    private rand;
    /**
     * @protected
     * 获取内容边界
     */
    getAABB(): Rectangle;
    /**
     * @protected
   * 获取内容边界
   */
    getExportAABB(): Rectangle;
    /**
     * 销毁
     */
    destory(cleanCache?: boolean): void;
}
export { Stage as default };
