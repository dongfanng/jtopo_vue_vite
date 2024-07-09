import { DisplayObject } from "../DisplayObject";
import { Node } from "../Node";
import { Style } from "../Style";
import { Shape } from "../geom/Shape";
import { ShapePath } from "./ShapePath";
export declare class NodeShapeBase {
    /**
    * 是否更新了数据
    */
    dirty: boolean;
    protected positions: any;
    protected ctrlPoints: string[];
    protected anchorPoints: string[];
    protected pathList: Array<ShapePath>;
    width: number;
    height: number;
    constructor();
    defControl(name: string, fn: Function): void;
    defAnchor(name: string, x: number, y: number): void;
    defPositon(name: string, x: number, y: number): void;
    addPath(path: ShapePath): void;
    drawTo(ctx: CanvasRenderingContext2D, style: Style, obj?: DisplayObject): void;
}
export declare class ShapeManager {
    loadShapesFromXML(xmlUrl: any): void;
    getShape(shapeId: string): Shape;
    test(): Node;
}
