/**
 * 事件对象, 可以监听和分发事件
 */
export declare class EventTarget {
    protected listeners: any;
    constructor();
    /**
     * 是否有该类型的监听
     * @param type
     */
    hasListener(type: string): boolean;
    /**
     * 增加事件监听
     * @param type 事件类型
     * @param  callback
     */
    addEventListener(type: string, callback: Function): void;
    /**
     * 移除一个事件监听
     * @param type
     * @param callback
     */
    removeEventListener(type: string, callback: Function): any;
    /**
     * 分发事件
     * @param event
     */
    dispatchEvent(event: any): void;
    /**
     * 增加监听事件, 功能完全等同于addEventListener，一种简写
     * @param type 事件类型
     * @param callback 事件处理函数
     */
    on(type: string, callback: Function): void;
}
export { EventTarget as default };
