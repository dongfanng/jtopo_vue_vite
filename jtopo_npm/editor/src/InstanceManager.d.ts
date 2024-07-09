import { DisplayObject, Link } from "@jtopo/core";
import { Editor } from "./Editor";
/**
 * 管理图元的实例化
 */
export declare class InstanceManager {
    editor: Editor;
    constructor(editor: Editor);
    delete(objects: DisplayObject[]): void;
    addNewInstance(nodeOrLink: any): void;
    /**
     * 根据data生成一个图元实例
     * @param data
     */
    create(className: string): any;
    lineDrawn(text: any, beginObject: any, mousePoint: any, beginEndpoint: any): any;
    lineDrawingFinished(link: Link): void;
}
