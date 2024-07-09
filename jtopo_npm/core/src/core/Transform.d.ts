import { Transformable } from './Interfaces';
import { PointLike, Vec2 } from './jtopo_type';
/**
 * 变换矩阵
 */
export declare class Transform implements Transformable {
    m: Array<number>;
    width: number;
    height: number;
    rotation: number;
    constructor(m?: Array<number>);
    get skewX(): number;
    get skewY(): number;
    get scaleX(): number;
    get scaleY(): number;
    get x(): number;
    get y(): number;
    copy(): Transform;
    identity(): void;
    transform(scaleX: any, skewX: any, skewY: any, scaleY: any, x: any, y: any): void;
    point(point: PointLike): {
        x: number;
        y: number;
    };
    vec(out: Vec2, v: Vec2): Vec2;
    points(points: any): any[];
    translate(x: any, y: any): this;
    translateTo(x: any, y: any): this;
    scale(sx: any, sy: any): this;
    getScale(): {
        x: number;
        y: number;
    };
    rotate(rad: any): this;
    rotateTarget(rad: any, x: any, y: any): void;
    getTranslation(): {
        x: number;
        y: number;
    };
    multiply(target: Transform): this;
    invert(): this;
    getMatrix(): number[];
    setAbsolutePosition(x: any, y: any): this;
}
export { Transform as default };
