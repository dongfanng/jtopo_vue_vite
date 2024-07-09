import { EventTarget } from '../core/EventTarget';
import Stage from '../core/Stage';
/**
 * 小提示
```js
// 示例
var tooltip = new Tooltip(stage);
tooltip.setHtml('小提示: 可以是html哦');

node.on('mousemove', function (event) {
    var input = stage.inputSystem;
    tooltip.showAt(input.x, input.y);
});
```
 */
export declare class Tooltip extends EventTarget {
    stage: Stage;
    domElement: HTMLElement;
    /**
     * 渐隐渐出定时器
     */
    fadeoutTimer: any;
    /**
     *
     * @param {Stage} stage
     */
    constructor(stage: any);
    /** 禁用 */
    disable(): void;
    /** 启用 */
    enabled(): void;
    /**
     * 设置显示的html内容
     * @param {String} html
     */
    setHtml(html: any): HTMLElement;
    initEvent(): void;
    /**
     * 显示，一般在鼠标当前位置显示，坐标系：cavans左上角为原点：(0,0)
     * @param {Number} x
     * @param {Number} y
     */
    showAt(x: any, y: any): void;
    /**
     * 隐藏
     */
    hide(): void;
    stopFade(): void;
    /**
     * 淡出定时间隔，透明度每次0.1的步长变化
     * @param  intervalTime 每次变化间隔毫秒
     */
    fadeOut(intervalTime?: number): void;
}
export { Tooltip as default };
