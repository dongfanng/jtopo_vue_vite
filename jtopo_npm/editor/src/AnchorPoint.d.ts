import { Stage, Link, InputSystem, Endpoint, Intersect, Node, Shape, PickType, PointLike } from '@jtopo/core';
import AnchorBox from './AnchorBox';
import Editor from './Editor';
export declare const CtrlIntersectPointName = "intersectNode";
declare class AnchorPoint extends Node {
    anchorBox: AnchorBox;
    editor: Editor;
    stage: Stage;
    intersect?: Intersect;
    isActive: boolean;
    link?: Link;
    endpoint?: Endpoint;
    shape: Shape;
    pickType: PickType;
    targetLocalFixedPoint?: PointLike;
    drawStartInfo: any;
    isIntersectPoint: boolean;
    constructor(anchorBox: any, x?: number, y?: number, w?: number, h?: number);
    setIntersect(intersect: Intersect): void;
    mouseenterHandler(): void;
    mouseoutHandler(): void;
    mousemoveHandler(): void;
    mousedownHandler(event: any): void;
    dragHandler(inputSystem: InputSystem): void;
    mouseupHandler(inputSystem: InputSystem): void;
    active(): void;
    unactive(): void;
}
export { AnchorPoint as default };
