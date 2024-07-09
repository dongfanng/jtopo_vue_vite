import { Shape, XmlShape } from "../geom/Shape";
import { PathArray } from "../jtopo_type";
import { ShapeRender } from "./ShapeRender";
export type ShapeJson = {
    name: string;
    width: number;
    height: number;
    connections?: Array<{
        name: string;
        x: number;
        y: number;
    }>;
    background?: PathArray;
    foreground?: PathArray;
};
declare class ShapeManagerClass {
    private packageMap;
    private shapeMap;
    private packageList;
    shapeRender: ShapeRender;
    readonly CorePackageName = "com.jtopo.core";
    constructor();
    getPackageList(): string[];
    loadCoreShapes(): void;
    loadFromXml(xmlText: string): import("./XMLShapeParser").ShapeCategoryJson;
    /**
     * 注册自定义的图形
     */
    regShape(packageName: string, shapeJson: ShapeJson): XmlShape;
    /**
     * 注册自定义的图形类
     */
    regShapeObject(packageName: string, name: string, shapeObj: Shape): void;
    /**
     * 注册多个自定义的图形资源
     */
    regShapes(packageName: string, shapes: Array<ShapeJson>): void;
    getShapes(packageName: string): Shape[];
    getShape(packageName: string, shapeName: string): Shape;
    getCoreShape(shapeName: string): Shape;
    toShapeInstance(packageName: string, shapedata: ShapeJson): XmlShape;
    /**
     * 获取指定图形的图标绘制在指定canvas上
     * @param packageName
     * @param shapeName
     * @param canvas
     * @param size 图标尺寸 , 例如: 42 结果就是 42x42的方形
     * @returns
     */
    shapeIconToCanvas(packageName: string, shapeName: string, canvas: HTMLCanvasElement, opt?: {
        size: number;
        strokeStyle: string;
        fillStyle: string;
    }): HTMLCanvasElement;
    shapeToCanvas(shapeObj: Shape, canvas: HTMLCanvasElement, opt?: {
        size: number;
        strokeStyle: string;
        fillStyle: string;
    }): HTMLCanvasElement;
}
export declare const ShapeManager: ShapeManagerClass;
export {};
