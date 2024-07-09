import { Stage, EventTarget } from '@jtopo/core';
/**
 * 编辑器左侧的图片面板，功能极简单，演示用
 */
export declare class IconsPanel extends EventTarget {
    stage: Stage;
    domElement: HTMLElement;
    dargItem: any;
    constructor(stage: any);
    initDom(): this;
    hide(): this;
    show(): this;
    /**
     * 获取当前被拖拽的项
     * @returns
     */
    getDragItem(): any;
    setConfig(data: any): this;
}
export { IconsPanel as default };
