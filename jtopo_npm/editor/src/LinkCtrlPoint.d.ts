import { InputSystem, CircleNode } from '@jtopo/core';
import LinkCtrlBox from './LinkCtrlBox';
import Editor from './Editor';
declare class LinkCtrlPoint extends CircleNode {
    editor: Editor;
    linkCtrlBox: LinkCtrlBox;
    isConnectPoint: boolean;
    canConnectEndpoint: any;
    isActive: boolean;
    constructor(linkCtrlBox: LinkCtrlBox);
    active(): void;
    unActive(): void;
    mousemoveHandler(): void;
    mousedownHandler(inputSystem: InputSystem): void;
    dragHandler(inputSystem: InputSystem): void;
    mouseupHandler(inputSystem: any): void;
}
export { LinkCtrlPoint as default };
