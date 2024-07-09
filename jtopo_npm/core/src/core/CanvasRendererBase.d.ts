import Renderer from './Renderer';
import Stage from './Stage';
import { DisplayObject } from './DisplayObject';
import Layer from './Layer';
import { Node } from './Node';
import { StyleSystem } from './StyleSystem';
import Link from './Link';
/**@ignore */
export declare abstract class CanvasRendererBase extends Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    styleSystem: StyleSystem;
    destoryed: boolean;
    stage?: Stage;
    constructor(layer?: Layer);
    abstract renderLayer(layer: Layer): any;
    _paintFlattenObjects(objects: Array<Node | Link>): void;
    _paintObjects(objects: Array<Node | Link>, isOverviewOrExport: boolean): void;
    private paint;
    paintSelected(obj: DisplayObject): void;
    clearAll(): void;
    dontNeedPickup(displayObj: DisplayObject): boolean;
    isMouseInStroke(pickRadius: any, path: any): boolean;
    isMouseInPath(path2d: any): boolean;
    private contextExtends;
    show(): void;
    hide(): void;
    getWidth(): number;
    getHeight(): number;
    setSize(w: any, h: any): void;
    getCursor(): string;
    setCursor(cursor: any): void;
    toDataURL(type?: string, quality?: any): string;
    getRectImageData(x: any, y: any, w: any, h: any): ImageData;
    clear(): void;
    /**
     * @Overwrite
     */
    dispose(): void;
}
