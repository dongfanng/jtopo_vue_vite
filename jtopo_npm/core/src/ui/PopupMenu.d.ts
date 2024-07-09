import EventTarget from '../core/EventTarget';
import Stage from '../core/Stage';
/**
 * 右键弹出菜单
 * @class
 */
export declare class PopupMenu extends EventTarget {
    stage: Stage;
    domElement: HTMLElement;
    html: string;
    /**
     *
     * @param {State} stage
     * @param {String} html
     */
    constructor(stage: any, html: any);
    remove(): void;
    /**
     * 设置菜单内容
     * @param {String} html
     */
    setHtml(html: any): HTMLDivElement;
    initEvent(dom: any): void;
    /**
     * 在x，y出显示
     * @param {Number} x
     * @param {Number} y
     */
    showAt(x: any, y: any): void;
    /**
     * 隐藏
     */
    hide(): void;
}
export { PopupMenu as default };
