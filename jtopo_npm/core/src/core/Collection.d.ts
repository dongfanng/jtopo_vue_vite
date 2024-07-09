import Rectangle from './Rectangle';
import { PointLike } from './jtopo_type';
/**
 * @ignore
 * 提供一些操作数组的静态方法
 */
export declare class Collection {
    /**
     * 数组中是否包含某个对象
     * @param arr
     * @param obj
     * @returns
     */
    static hasChild(arr: Array<any>, obj: any): boolean;
    /**
     * 数组中是否不包含某个对象
     * @param arr
     * @param obj
     * @returns
     */
    static notContains(arr: Array<any>, obj: any): boolean;
    /**
     * 向数组中批量增加一些对象
     * @param arr
     * @param objs
     * @returns
     */
    static addAll(arr: Array<any>, objs: Array<any>): any[];
    /**
     * 移除数组中某个索引位置的对象
     * @param arr
     * @param index
     */
    static removeAt(arr: Array<any>, index: number): any[];
    /**
     * 移除一个对象, 返回被移除对象原来在数组中的index
     * @param obj
     */
    static remove(arr: Array<any>, obj: any): number;
    /**
    * 获取一些点坐标构成的矩形
    */
    static getPointsRect(points: Array<PointLike>): Rectangle;
    /**
     * 将所有矩形的相关位置和尺寸投影到另外一个矩形内以后的矩形列表
     */
    static getRectsNormalization(rects: Array<Rectangle>, projectRect: Rectangle): Rectangle[];
    static getMinMax(points: Array<PointLike>): {
        min: {
            x: number;
            y: number;
        };
        max: {
            x: number;
            y: number;
        };
    };
    /**
     *
     * 归一化到一个尺寸为1x1的正方型内：x:[-0.5, 0.5] y: [-0.5, 0.5], 保持相对位置宽高比
     * 得到所有点坐标归一化后的坐标数组
     * @keepAspectRatio 是否保持宽高比
     */
    static getPointsNormalization(points: Array<PointLike>, offsetX?: number, offsetY?: number, keepAspectRatio?: boolean): {
        x: number;
        y: number;
    }[];
    /**
     * 旋转点坐标
     * @param normaledPoints 归一化后的坐标
     * @param angle
     * @returns
     */
    static rotateNormaledPoints(normaledPoints: Array<PointLike>, angle: number, cx?: number, cy?: number): PointLike[];
}
export { Collection as default };
