import { Link, InputEvent } from '@jtopo/core';
import Editor from './Editor';
/**
 * 事件管理
 */
export declare class EditorEventManager {
    editor: Editor;
    constructor(editor: Editor);
    init(): void;
    deleteHandler(): any;
    mousedownHandler(event: any): void;
    mousewheelHandler(event: any): void;
    dblclickHandler(event: any): void;
    mouseupHandler(event: any): void;
    mousedragHandler(event: any): void;
    mousemoveHandler(event: any): void;
    mouseenterHandler(event: any): void;
    mouseoutHandler(event: any): void;
    /**
     * 鼠标开始划出线
     * @param link
     */
    onLineDrawnHandler(link: Link): void;
    /**
     * 鼠标划线结束
     * @param link
     */
    onlineDrawingFinishedHandler(link: Link): void;
    selectedGroupDragHandler(event: InputEvent, objects: any): void;
    selectedGroupDragEndHandler(event: InputEvent, objects: any): void;
}
