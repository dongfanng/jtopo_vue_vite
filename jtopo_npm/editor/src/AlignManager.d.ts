import { InputSystem, Link, Rectangle } from '@jtopo/core';
import Editor from './Editor';
/**
 * 鼠标拖动时节点对齐处理
 */
export declare class AlignManager {
    editor: Editor;
    dxLine: Link;
    dyLine: Link;
    alignInfo: any;
    minDistance: number;
    _disabled: boolean;
    visible: boolean;
    constructor(editor: Editor);
    init(editor: Editor): void;
    disable(): void;
    enable(): void;
    getAlignInfo(inputSystem: InputSystem, minDist: number): {
        x: number;
        y: number;
        rect: Rectangle;
        xRect: any;
        yRect: any;
        xType: any;
        yType: any;
    };
    mousedownHandler(inputSystem: InputSystem): void;
    mouseupHandler(inputSystem: InputSystem): void;
    mousedragHandler(inputSystem: InputSystem): void;
    findAlignRectInfo(curr: Rectangle, rectList: Array<Rectangle>, minDist: number): {
        x: number;
        y: number;
        rect: Rectangle;
        xRect: any;
        yRect: any;
        xType: any;
        yType: any;
    };
}
