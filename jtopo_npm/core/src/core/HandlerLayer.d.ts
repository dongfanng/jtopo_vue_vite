import Layer from './Layer';
import { Node } from './Node';
import Stage from './Stage';
import Rectangle from './Rectangle';
/**
 *@ignore
 * 处于最顶层，响应鼠标操作，对应一个Canvas
 */
export declare class HandlerLayer extends Layer {
    readonly className: any;
    _frames: number;
    _zIndex: number;
    areaBox: Node;
    constructor(stage: Stage);
    showAreaBox(): Rectangle;
    mouseoutHandler(event: any): void;
    _calc_originInParent(): number[];
    update(): boolean;
    draw(ctx: CanvasRenderingContext2D): void;
}
export { HandlerLayer as default };
