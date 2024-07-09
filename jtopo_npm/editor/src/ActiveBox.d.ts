import { DisplayObject, Node } from '@jtopo/core';
import Editor from './Editor';
declare class ActiveBox extends Node {
    editor: Editor;
    currObject: DisplayObject;
    constructor(editor: Editor, x?: number, y?: number, w?: number, h?: number);
    update(): void;
    attachTo(nodeOrLink: DisplayObject): void;
    updateSize(): void;
    viewClone(target: DisplayObject): void;
}
export { ActiveBox as default };
