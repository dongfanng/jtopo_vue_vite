import { PathArray } from "../jtopo_type";
/**
 *
 */
export declare class VirtualCanvasContext {
    private path2D;
    private base?;
    private initSvgPath?;
    private desc;
    private width;
    private height;
    private cmds;
    constructor(width: number, height: number, cmds: PathArray);
    /** 生成真实的绘制函数, 替换掉shape里的draw */
    toRealDrawFunction(): any;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    roundRect(x: number, y: number, width: number, height: number): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    closePath(): void;
}