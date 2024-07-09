import { Vec2 } from "../jtopo_type";
declare function add(out: Vec2, v1: Vec2, v2: Vec2): Vec2;
declare function multiplyC(out: Vec2, v1: Vec2, c: number): Vec2;
declare function scale(out: any, v: any, s: number): Vec2;
declare function negate(out: Vec2, a: Vec2): Vec2;
declare function normalize(out: Array<number>, v: any): Vec2;
declare function len(v: Vec2): number;
declare function dot(v1: Vec2, v2: Vec2): number;
declare function projection(out: Vec2, v: Vec2, n: Vec2): Vec2;
/**
 * 二维向量计算
 */
export declare class vec2 {
    static multiplyC: typeof multiplyC;
    static scale: typeof scale;
    static len: typeof len;
    static negate: typeof negate;
    static add: typeof add;
    static normalize: typeof normalize;
    static dot: typeof dot;
    static projection: typeof projection;
}
export {};
