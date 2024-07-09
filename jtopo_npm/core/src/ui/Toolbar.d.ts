import Stage from '../core/Stage';
/**
 * 工具条
 * <p> 通过按钮触发来调用stage的方法来完成下面的功能: </p>
 * <p> 设置操作模式（默认、框选、编辑、拖拽、查看、锁定） </p>
 * <p> 控制放大、缩小、居中、导出 等</p>
 *
```js
// 显示
stage.showToolbar();

// 隐藏
stage.hideToolbar();
```
*/
export declare class Toolbar {
    stage: Stage;
    domObj: HTMLElement;
    buttons: NodeListOf<HTMLButtonElement>;
    fileInput: HTMLElement;
    /**
     * 下载时，是否将图标内联到json
     */
    imageToBase64: boolean;
    /**
     * @param {Stage} stage
     */
    constructor(stage: Stage);
    getDom(): HTMLElement;
    /**
     * 显示
     */
    show(): void;
    /**
     * 隐藏
     */
    hide(): void;
    remove(): void;
    /** 获取工具高度 */
    getHeigth(): number;
    initActiveStatus(): void;
    initToolbar(stage: any, html: any): void;
    activeBtn(btn: any): void;
    removeAllActive(group: any): void;
}
export { Toolbar as default };
