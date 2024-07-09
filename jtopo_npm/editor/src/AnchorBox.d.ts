import { DisplayObject, Node, Endpoint, Intersect } from '@jtopo/core';
import AnchorPoint from './AnchorPoint';
import Editor from './Editor';
declare class AnchorBox extends Node {
    editor: Editor;
    ctrlIntersectPoint: AnchorPoint;
    target?: DisplayObject;
    intersect?: Intersect;
    activedPoint: AnchorPoint;
    constructor(editor: Editor, x?: number, y?: number, w?: number, h?: number);
    cancel(): void;
    mouseoutStageHandler(): void;
    mouseenterStageHandler(): void;
    clearTarget(): void;
    setTarget(obj: DisplayObject): void;
    canConnectable(e: DisplayObject): boolean;
    private setTargetWithName;
    clearActived(): void;
    private activePointByName;
    private showIntersectAnchor;
    update(): void;
    private createAnchorPoint;
    private getObjectsIntersect;
    private getConnectableEndpointFromObjects;
    findConnectableEndpoint(excludes: Array<DisplayObject>): Endpoint | null;
}
export { AnchorBox as default };
