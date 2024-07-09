import CanvasRender from './CanvasRenderer';
import Stage from './Stage';
import Layer from './Layer';
import DisplayObject from './DisplayObject';
/**
 * @ignore
 */
export declare class OverviewRender extends CanvasRender {
    constructor(stage: Stage, layer?: Layer);
    /**@protected */
    dontNeedPickup(displayObj: DisplayObject): boolean;
    /**@protected */
    paintSelected(obj: DisplayObject): void;
    /**@protected */
    overviewPaint(layer: Layer): void;
    /**@protected */
    exportPaintObjects(objArr: Array<DisplayObject>): void;
}
/**
 * 缩略图对象
 */
declare class Overview {
    /**
     * 是否可见
     */
    visible: boolean;
    readonly stage: Stage;
    readonly domElement: HTMLCanvasElement;
    dirty: boolean;
    private rectObj;
    private _updateTimer;
    private readonly render;
    private readonly canvas;
    private readonly inputSystem;
    private _overviewTimer;
    private readonly paintInterval;
    /**
     * 内置对象，用户无法创建
     */
    constructor(stage: Stage);
    /**
     * @override
     * @param domStyle
     */
    css(domStyle: any): this;
    initEvent(): void;
    /**
     * 显示
     */
    show(): this;
    /** 隐藏
     */
    hide(): this;
    /**
     * 获得宽度
     * @returns {Number}
     */
    getWidth(): number;
    /** 获得高度
     * @returns {Number}
     */
    getHeight(): number;
    /**
     * 设置缩略图的尺寸
     */
    setSize(w: number, h: number): void;
    private paint;
    private paintDragRect;
    /**
     * 更新绘制一次
     */
    update(): void;
    /**@protected */
    mousedownHandler(): void;
    /**@protected */
    mousedragHandler(): void;
    private moveWith;
    /**@protected */
    mousewheelHandler(e: any): void;
    /**@protected */
    mousemoveHandler(): void;
    /**@protected */
    mouseupHandler(): void;
}
export { Overview as default };
