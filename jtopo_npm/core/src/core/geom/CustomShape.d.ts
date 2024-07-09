import { DisplayObject } from '../DisplayObject';
export type PathArray = Array<{
    T: PathTag;
    x?: number;
    x1?: number;
    x2?: number;
    x3?: number;
    y?: number;
    y1?: number;
    y2?: number;
    y3?: number;
    r?: number;
    rx?: number;
    ry?: number;
    cx?: number;
    cy?: number;
    width?: number;
    height?: number;
    size?: number;
    arcsize?: number;
    w?: number;
    h?: number;
    align?: string;
    valign?: string;
    str?: string;
    color?: string;
    limit?: number;
    m?: PathArray;
}>;
export type PathTag = 'move' | 'line' | 'arc' | 'curve' | 'close' | 'path' | 'rect' | 'roundrect' | 'circle' | 'ellipse' | 'text' | 'fontsize' | 'fontcolor' | 'miterlimit' | 'stroke' | 'fill' | 'strokewidth' | 'fillstroke' | 'strokecolor' | 'fillcolor' | 'save' | 'restore';
/**
 *
 */
export declare class CustomShape {
    className: any;
    /**@protected */
    anchorPoints: Array<string>;
    /**@protected */
    ctrlPoints: Array<String>;
    /**
     * 绘制指令列表
     */
    pathArray?: PathArray;
    packageName: string;
    name: string;
    /** 是否单位坐标 */
    isUnit: boolean;
    /**
     * 是否更新了数据
     */
    dirty: boolean;
    width: number;
    height: number;
    /**
     */
    constructor();
    /**
     * 标记‘脏’，请求更新绘制
     */
    markDirty(): void;
    toJSON(): any;
    static fromJSON(json: any): any;
    draw(ctx: CanvasRenderingContext2D, obj: DisplayObject): void;
}
