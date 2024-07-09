import Intersect from '../geom/Intersect';
import { PointLike } from '../jtopo_type';
import { DisplayObject } from '../DisplayObject';
/**
 * @ignore
 * 根据一条线段p1-p2, 生成这两个点之间的N条平行线段
 * @param {object} p1 - 线段起点
 * @param {object} p2 - 线段终点
 * @param {number} count - 平行线数量
 * @param {number} gap - 平行线之间的间距
 * @returns {Array} - 包含两个点数组的数组，分别为起点和终点的平行线
 */
declare function getParallelLines(p1: PointLike, p2: PointLike, count: number, gap: number): PointLike[][];
/**
 * @ignore
 * 根据一条线段p1-p2, 生成这两个点之间的N条平行线段
 * @param {object} p1 - 线段起点
 * @param {object} p2 - 线段终点
 * @param {number} gap - 平行线之间的间距
 * @returns {Array} - 包含两个点数组的数组，分别为起点和终点的平行线
 */
declare function getParallelLine(p1: PointLike, p2: PointLike, gap: number): PointLike[];
/**@ignore */
declare function pointProjectToLine(p: PointLike, p1: PointLike, p2: PointLike): Intersect;
/**@ignore */
declare function getNearestPointOnLines(p: PointLike, points: Array<PointLike>): Intersect;
/**
 * @ignore
 * 计算两个线段(p1-p2) 和 线段(m1-m2)的交点
 * @param {*} p1
 * @param {*} p2
 * @param {*} m1
 * @param {*} m2
 * @param {Boolean} 是否按直线计算：点不在线段上也返回交点（如果有）
 */
declare function getLineIntersectPoint(p1: PointLike, p2: PointLike, m1: PointLike, m2: PointLike, isLine?: boolean): {
    x: number;
    y: number;
};
/**@ignore */
declare function getLineIntersectPoints(p1: PointLike, p2: PointLike, points: Array<PointLike>, isLine?: boolean): any[];
/**
 * @ignore
 */
declare function getNearestPointOnObjectsOBB(layer: any, mouseInStagePoint: any, nodeOrLinks: any, minDist: any): any;
export type NearestInfo = {
    object: any;
    anchorName: string;
    distance: number;
};
/**@ignore */
export declare function getNearestAnchorOnObjects(mouseInStagePoint: PointLike, nodeOrLinks: Array<DisplayObject>, minDist: number): NearestInfo[];
/**@ignore */
declare function getNearestPositionName(intersectInStage: any, minDist: any): string;
/**
 * @ignore */
export declare function isHorizontal(k: any): boolean;
/**
 * @ignore */
export declare function range(value: any, min: any, max: any): any;
export { getNearestPositionName, getNearestPointOnObjectsOBB, getNearestPointOnLines, getLineIntersectPoint, getLineIntersectPoints, getParallelLine, getParallelLines, pointProjectToLine };
