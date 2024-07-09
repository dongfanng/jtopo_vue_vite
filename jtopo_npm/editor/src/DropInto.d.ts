import { DisplayObject } from '@jtopo/core';
import Editor from './Editor';
export declare function getDropToInfo(editor: Editor, selectedGroupObjects: Array<DisplayObject>): {
    parent: any;
    objects: DisplayObject[];
};
export declare function newInstanceDrop(editor: any, nodeOrLink: any): void;
