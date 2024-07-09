import { EndpointOffset, PointLike, Vec2 } from './jtopo_type';
export declare class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    toJSON(): {
        x: number;
        y: number;
    };
    static isLikePoint(object: any): boolean;
    static looksSame(p1: PointLike, p2: PointLike, e: number): boolean;
    static middle(p1: PointLike, p2: PointLike): {
        x: number;
        y: number;
    };
    static getAngle(a: PointLike, z: PointLike): number;
    /**
     * 点(x,y) 绕点 (x0,y0) 旋转angle后的坐标
     * @param x
     * @param y
     * @param cx
     * @param cy
     * @param angle
     */
    static rotate(x: number, y: number, cx: number, cy: number, angle: number): PointLike;
    /**
     * 旋转点
     * @param p1
     * @param p2
     * @param angle
     */
    static rotatePoint(p1: PointLike, p2: PointLike, angle: number): {
        x: number;
        y: number;
    };
    /**
     * 计算两点之间的距离
     * @param x
     * @param y
     * @param x2
     * @param y2
     * @returns
     */
    static distance(x: number, y: number, x2: number, y2: number): number;
    /**
     * 计算两点之间的距离
     * @param p1
     * @param p2
     * @returns
     */
    static distancePoint(p1: PointLike, p2: PointLike): number;
    /**
     * 将一系列的点合并成更少的点，使得相邻的点在某方向上变化不大时仅保留一个点，以减少最终结果中点的数量。
     * @param points
     * @param epsilon 参数是判断两个方向是否相近的阈值。
     * @returns
     */
    static mergeClosestPoints(points: Array<PointLike>, epsilon?: number): PointLike[];
    static forward(p: PointLike, target: PointLike, distance: number): {
        x: number;
        y: number;
    };
    static offsetWithAngle(p: PointLike, angle: number, offset: EndpointOffset): {
        x: number;
        y: number;
    };
    /**
     * 创建一组点, 间隔长度为向量n的模(长度)
     * @param p - 起始点
     * @param n - 向量数组
     * @param count - 点的数量，默认为1
     * @param includePoint - 是否包含起始点，默认为false
     * @returns 返回点数组
     */
    static createPoints(p: PointLike, n: Vec2, count?: number, includePoint?: boolean): PointLike[];
    static createPointsBidirectional(p: PointLike, n: Vec2, count: number): PointLike[];
    /**
     * 在给定的两点之间，根据给定的比例t，计算出一个点的坐标
     * @param {PointLike} a - 第一个点的坐标
     * @param {PointLike} b - 第二个点的坐标
     * @param {number} t - 比例值，表示在两点之间的位置，0表示a点，1表示b点，0到1之间的值表示两点间的插值点
     * @returns {PointLike} - 插值点的坐标
     */
    static interpolate(a: PointLike, b: PointLike, t: number): PointLike;
    /**
     * 计算点集合的距离总和
     * @param points 点集合
     * @returns 返回点集合的距离总和
     */
    static getDistanceSum(points: Array<PointLike>): number;
    /**
     * 计算多点线上某一点的坐标
     * @param points 多点坐标数组
     * @param t 线上某点的相对位置 [0-1]
     * @param offset 偏移量
     * @returns 线上某点的坐标
     */
    static calculatePointOnMultiPointLine(points: Array<PointLike>, t: number): PointLike;
}
