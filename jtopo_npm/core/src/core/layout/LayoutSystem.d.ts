import { AnimationSystem } from "../Animation";
import Graph, { Vertext } from "../geom/Graph";
import { GraphSystem } from "../geom/GraphSystem";
import { Shape } from "../geom/Shape";
import { PointLike } from "../jtopo_type";
import Node from "../Node";
import { Layout } from "./Layout";
export type CircleLayoutOpt = {
    cx?: number;
    cy?: number;
    radius?: number;
    startAngle?: number;
    endAngle?: number;
    /**
     * 每层半径缩小系数, 默认0.5
     */
    radiusScale?: number;
    /**
     * 每层角度缩小系数, 默认1，总的角度保持不变
     */
    angleScale?: number;
    update?: Function;
};
/**
 * 布局系统
 */
export declare class LayoutSystem {
    graphSystem: GraphSystem;
    animationSystem: AnimationSystem;
    constructor(animationSystem: AnimationSystem, graphSystem: GraphSystem);
    /**
     * 根据指定的对象集合 和 形状来生成布局
     *
     * 对象的个数 <= 点的个数
     *
     * @param objects
     * @param shapeOrPoints
     */
    shapeLayout(objects: Array<Node>, shapeOrPoints: Shape | Array<PointLike>): Layout;
    /**
     * 对指定图对象做圆形布局
     *
     * 指定的图如果不是一棵树，将自动生成图的最小生成树，然后根据最小生成树生成布局对象
     *
     * @param graph
     * @returns
     */
    circleLayout(graph: Graph, opt?: CircleLayoutOpt): Layout;
    /**
     * 对指定图对象做树形布局
     *
     * 指定的图如果不是一棵树，将自动生成图的最小生成树，然后根据最小生成树生成布局对象
     *
     * @param graph
     * @returns
     */
    treeLayout(graph: Graph): Layout;
    /**
     * 遍历一棵树所有顶点-广度优先
     * @param graph
     * @returns
     */
    travelTree(graph: Graph, rootVetext: Vertext): any[];
    getCircleLayoutPositions(rootVetext: Vertext, opt?: {
        cx?: number;
        cy?: number;
        radius?: number;
        startAngle?: number;
        endAngle?: number;
        /**
         * 每层半径缩小系数, 默认0.5
         */
        radiusScale?: number;
        /**
         * 每层角度缩小系数, 默认1，总的角度保持不变
         */
        angleScale?: number;
        update?: Function;
    }): any[];
    /**
     * 调整节点对象的尺寸：尺寸刚好覆盖住所有子节点
     */
    sizeFitToChildren(node: Node, padding?: number): void;
}
