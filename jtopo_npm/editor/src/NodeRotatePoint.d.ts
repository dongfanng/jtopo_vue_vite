import { CircleNode } from '@jtopo/core';
import NodeCtrlBox from './NodeCtrlBox';
declare class NodeRotatePoint extends CircleNode {
    private editor;
    private stage;
    private selectedGroup;
    private elementInitAngle;
    private mouseInitAngle;
    constructor(nodeCtrlBox: NodeCtrlBox, name: string);
    /**@protected */
    mousemoveHandler(): void;
    /**@protected */
    mousedownHandler(inputSystem: any): void;
    /**@protected */
    mouseupHandler(inputSytem: any): void;
    /**@protected */
    dragHandler(inputSystem: any): void;
}
export { NodeRotatePoint as default };
