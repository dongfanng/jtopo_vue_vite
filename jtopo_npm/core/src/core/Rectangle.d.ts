import { PointLike } from "./jtopo_type";
/**
 * 矩形类型，四个核心属性：x、y、width、height
 *
 * 和 Node 节点不同，Rect的坐标原点在左上角，不在中间
 */
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    setTo(x?: number, y?: number, width?: number, height?: number): void;
    getRect(): this;
    clone(): Rectangle;
    toString(): string;
    equals(rect: Rectangle): boolean;
    containsRect(rect: Rectangle): boolean;
    contains(x: number, y: number): boolean;
    isIntersectRect(rect: any): boolean;
    getRight(): number;
    getBottom(): number;
    isEmpty(): boolean;
    setToEmpty(): void;
    getCenter(): {
        x: number;
        y: number;
    };
    toPoints(): {
        x: number;
        y: number;
    }[];
    static union(out: Rectangle, rect: Rectangle): Rectangle;
    static unionRects(rects: Array<Rectangle>): Rectangle;
    static normal(center: PointLike, p: PointLike): number[];
    get left(): number;
    set left(v: number);
    get right(): number;
    set right(v: number);
    get top(): number;
    set top(v: number);
    get bottom(): number;
    set bottom(v: number);
    get center(): number;
    set center(v: number);
    get middle(): number;
    set middle(v: number);
}
/**@ignore */
export declare class OBB {
    points: Array<PointLike>;
    aabb: Rectangle;
    localPoints: Array<PointLike>;
    constructor();
    contains(x: number, y: number): boolean;
    static toAABB(points: Array<PointLike>, lineWidth?: number): Rectangle;
}
export { Rectangle as default };
