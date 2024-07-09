import DisplayObject from "./DisplayObject";
import { EventTarget } from "./EventTarget";
import { Stage } from "./Stage";
import { Observable } from "./event/Observable";
/**
 * 输入系统（管理鼠标信息和状态）
 */
export declare class InputSystem extends EventTarget {
    type: string;
    /**
     * 忽略将提高性能、降低能耗
     *
     * 对象不再触发和响应 mousemove、mouseenter、mouseout事件
     */
    skipPointerMovePicking: boolean;
    /**
     * 当前鼠标选中的对象,
     * 已过时，使用 target 替代，例如：stage.inputSystem.target
     * @deprecated
     */
    get pickedObject(): DisplayObject;
    /**
     * 当前鼠标选中的对象
     */
    target?: DisplayObject;
    /**
     * 当前鼠标指向的对象
     */
    mouseoverTarget: DisplayObject | null;
    /**
     * 当前拖拽时的目标对象
     */
    dropTarget: DisplayObject | null;
    /**
     * 鼠标缩放开关，为false时，鼠标缩放将不起作用
     */
    wheelZoom: boolean;
    /**
     * 鼠标按下时的坐标（canvas坐标）
     */
    mouseDownX: number;
    /**
     * 鼠标松开时的坐标(canvas坐标)
     */
    mouseDownY: number;
    /**
     * 鼠标的屏幕坐标x(canvas左上角为0,0)
     */
    x: number;
    /**
    * 鼠标的屏幕坐标y(canvas左上角为0,0)
    */
    y: number;
    /**
     * 相对于上一次鼠标x的移动增量（canvas坐标）
     */
    dx: number;
    /**
     * 相对于上一次鼠标y的移动增量（canvas坐标）
     */
    dy: number;
    /**
     * 鼠标是否按下
     */
    isMouseDown: boolean;
    /**
     * 是否拖拽结束
     */
    isDragEnd: boolean;
    /**
     * 是否在拖拽中
     */
    isDraging: boolean;
    /**
     * 鼠标是否在画布上
     */
    isMouseOn: boolean;
    /**
     * 是否拖拽的开始
     */
    isDragStart: boolean;
    /**
     * 原始的事件对象
     */
    event: MouseEvent;
    /**
     * 上一次事件的状态记录
     */
    previous: any;
    private idleTimer;
    /**
     * 鼠标是否空闲
     */
    isIdle: boolean;
    /**
     * 鼠标空闲时间, 50毫秒内没有动作时认为空闲
     */
    idleTimeout: number;
    private timeStamp;
    buttons: number;
    button: number;
    touchesDistance: number;
    distanceRatio: number;
    stage: Stage;
    eventObservable: Observable;
    constructor();
    _initEvent(stage: Stage): void;
    private _initObserve;
    /**
     * 已过时，请使用：inputSystem.event.preventDefault()
     *
     * @deprecated
     */
    preventDefault(): void;
    /**
     * 是否右键
     * @returns
     */
    isRightButton(): boolean;
    private updateBaseInfo;
    /**@deprecated */
    updateMouseInfo(mouseEvent: MouseEvent, type: string): void;
    private updateTouchInfo;
    /**@protected */
    _onEvent(rawEvent: any): void;
    pickObject(target: DisplayObject): void;
}
export { InputSystem as default };
