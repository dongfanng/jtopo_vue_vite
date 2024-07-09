import { Node, Link, Style } from '@jtopo/core';
import LinkCtrlPoint from './LinkCtrlPoint';
import Editor from './Editor';
declare class LinkCtrlBox extends Node {
    editor: Editor;
    ctrlPointStyle: Style;
    attachedLink?: Link;
    anchorNameStr?: string;
    ctrlPointInfo: any;
    constructor(editor: Editor);
    mouseoutStageHandler(): void;
    mouseenterStageHandler(): void;
    createNodeResizePoint(name: string): LinkCtrlPoint;
    init(): void;
    draw(ctx: any): void;
    updateSize(): void;
    updateCtrlPoints(link: Link): void;
    hideAllPoint(): void;
    updateFllow(): void;
    attachTo(link: Link): void;
    clearTarget(): void;
}
export { LinkCtrlBox as default };
