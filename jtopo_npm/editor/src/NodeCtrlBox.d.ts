import { Node } from '@jtopo/core';
declare class NodeCtrlBox extends Node {
    editor: any;
    currNode: any;
    constructor(editor: any, x?: number, y?: number, w?: number, h?: number);
    update(): void;
    mouseoutStageHandler(): void;
    mouseenterStageHandler(): void;
    initCtrlPoint(node: any): void;
    createCtrlPoint(name: any): any;
    clearTarget(): void;
    attachTo(node: any): void;
    updateSize(): void;
    initPoints(): void;
    viewClone(target: any): void;
}
export { NodeCtrlBox as default };
