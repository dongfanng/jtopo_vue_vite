import Stage from './Stage';
declare class DebugPanel {
    domElement: HTMLElement;
    stage: Stage;
    _timer: any;
    /**
     * 数字小数保留位数
     */
    numberFixed: number;
    constructor(stage: Stage);
    init(): void;
    start(intervalTime?: number): void;
    setContent(msg: string): void;
    checkDom(): void;
    hide(): this;
    show(intervalTime?: any): this;
}
export { DebugPanel as default };
