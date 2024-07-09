import { AnimationSystem, EasingNames } from '../Animation';
import { PointLike } from '../jtopo_type';
import { Node } from '../Node';
export type LayoutAnimationOption = {
    name?: string;
    duration?: number;
    onEnd?: Function;
    effect?: EasingNames;
    times?: number;
    delay?: number;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | 'normal';
};
/**
 * 布局对象
 *
 * 根据对象列表 和 坐标列表来设置对象的坐标
 *
 * 并且可以做变换（平移、旋转、缩放）
 */
export declare class Layout {
    animationSystem: AnimationSystem;
    objects: Array<Node>;
    positions: Array<PointLike>;
    positionNormals: Array<PointLike>;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    width: number;
    height: number;
    rotation: number;
    constructor(objects: Array<Node>, positions: Array<PointLike>);
    resizeTo(width: number, height: number): void;
    /**
     * 调整尺寸
     * @param width
     * @param height
     */
    resize(width: number, height: number): void;
    /**
     * 设置位置 (也就是中心的位置)
     * @param x
     * @param y
     */
    translate(x: number, y: number): void;
    /**
     * 缩放
     * @param sx
     * @param sy
     */
    scale(sx: number, sy: number): void;
    /**
     * 旋转
     * @param rotation
     */
    rotate(rotation: number): void;
    /**
     * 实际修改对象坐标的函数
     * @param positions
     */
    updateXY(positions: Array<PointLike>): void;
    /**
     * 执行布局
     * @param animationOption 动画参数
     * @returns
     */
    doLayout(animationOption: LayoutAnimationOption): this;
}
