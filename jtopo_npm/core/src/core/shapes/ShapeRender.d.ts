import { PathArray } from "../jtopo_type";
export declare class ShapeRender {
    constructor();
    private toPath2D;
    drawPathArray(ctx: any, pathArr: PathArray, width?: number, height?: number, lineWidth?: number): void;
    private rawPathArray2;
}
