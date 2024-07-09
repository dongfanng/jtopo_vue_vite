import { Node, InputSystem } from '@jtopo/core';
import NodeCtrlBox from './NodeCtrlBox';
declare class NodeResizePoint extends Node {
    private nodeCtrlBox;
    private editor;
    private stage;
    private selectedGroup;
    constructor(nodeCtrlBox: NodeCtrlBox, name: string);
    /**@protected */
    mouseenterHandler(): void;
    /**@protected */
    mousemoveHandler(): void;
    /**@protected */
    mouseoutHandler(e: any): void;
    /**@protected */
    mousedownHandler(event: any): void;
    /**@protected */
    mouseupHandler(event: any): void;
    /**@protected */
    dragHandler(inputSystem: InputSystem): void;
    private adjustFixedDirection;
}
export { NodeResizePoint as default };
