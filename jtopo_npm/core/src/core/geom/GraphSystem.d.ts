import VirtualTree from "../layout/VirtualTree";
import Link from "../Link";
import Node from "../Node";
import Graph, { Edge, Vertext } from "./Graph";
/**
 * 图系统 （贴合数学上的图论）
 *
 * 一、提供静态方法，可以把Node/Link对象集合转成 图对象；
 *
 * 二、根据图对象可以更方便的分析对象关系，例如：
 * 1. 某个节点的出入度、邻接节点列表
 * 2. 图的遍历
 * 3. 从一个节点到另外一个节点的路径信息等
 *
 * 提供、提供常用算法，例如：
 * 1. 最小生成树
 * 2. 判断一个图是否是“树”（ 是否有回路 等）
 * 3. 是否零图
 * 3. 图的阶（Order）、是否零图、是否平凡图等
 *

```js
// 代码示例：
// node&link对象集合
let objects = layer.children;

// 转成图对象（0-多个）
let graphArr = stage.graphSystem.objectsToGraphs(objects);

let graph = graphArr[0];
console.log(graph.isTree());

// 顶点集合
let vertexes = graph.vertexes;
console.log('第一个顶点的出度为:', graph.vertexes[0].getOutDegree());

// 边集合
let edges = graph.edges;
// ...

```
 */
export declare class GraphSystem {
    /**
     * 根据图生成最小生成树
     */
    static createMinimalSpanningTree(graph: Graph): Graph;
    getNodes(graph: Graph): any[];
    getLinks(graph: Graph): any[];
    /**
     * 将Node或者Link集合转成图列表
     * @param displayObjects
     * @returns
     */
    objectsToGraphs(displayObjects: Array<Node | Link>): Array<Graph>;
    toGraphs(vertexes: Array<Vertext>, edges: Array<Edge>): Array<Graph>;
    travelVertext(v: Vertext, subVertexes?: Array<Vertext>, subEdges?: Array<Edge>, markSet?: Set<any>): void;
    /**
     * 生成1棵虚拟树( 提出去放到system)
     * @returns Array
     */
    toTree(graph: Graph): VirtualTree;
}
