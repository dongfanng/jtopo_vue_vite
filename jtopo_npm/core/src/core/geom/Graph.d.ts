/**
 * 顶点（图系统范畴内）
 */
export declare class Vertext {
    id: number;
    inputs: Array<Edge>;
    outputs: Array<Edge>;
    object: any;
    constructor();
    /**
     * 度（Degree）：一个顶点的度是指与该顶点相关联的边的条数，顶点v的度记作d(v)。
     *
     * 对于有向图来说，一个顶点的度可细分为入度和出度。
     *
     * @returns
     */
    getDegree(): number;
    /**
     * 入度（In-degree）: 一个顶点的入度是指与其关联的各边之中，以其为终点的边数
     * @returns
     */
    getInDegree(): number;
    /**
     * 出度（Out-degree）：出度则是相对的概念，指以该顶点为起点的边数。
     * @returns
     */
    getOutDegree(): number;
    /**
     * 获取邻接节点列表
     */
    getAdjacentList(): Vertext[];
}
/**
 * 边 (图系统范畴内)
 */
export declare class Edge {
    id: number;
    weight: number;
    from: Vertext;
    to: Vertext;
    object: any;
    constructor(from: Vertext, to: Vertext);
    /**
     * 是否自环（Loop）：若一条边的两个顶点为同一顶点，则此边称作自环。
     */
    isLoop(): boolean;
    /**
     * 是否和指定边邻接
     * @param edge
     */
    isAdjacent(edge: Edge): boolean;
}
/**
 * 路径 (图系统范畴内)
 *
 * 由顶点和边构成
 *
 */
export declare class Path {
    /**
     * 顶点列表
     */
    vertexes: Array<Vertext>;
    /**
     * 边列表
     */
    edges: Array<Edge>;
    constructor(vertexes: Array<Vertext>);
    /**
     * 路径是否‘闭’
     * @param path
     * @returns
     */
    isClose(path: Array<Vertext>): boolean;
    /**
     * 行迹（Trace）：如果路径P(u,v)中的边各不相同，则该路径称为u到v的一条行迹。
     */
    isTrace(path: Array<Vertext>): boolean;
    /**
     *
     * 是否回路: 闭的行迹称作回路（Circuit)
     * @param path
     */
    isCircuit(path: any): boolean;
    /**
     * 轨道（Track）：如果路径P(u,v)中的顶点各不相同，则该路径称为u到v的一条轨道。
     */
    isTrack(path: any): boolean;
    /**
     * 是否圈：闭的轨称作圈。
     * @param path
     */
    isCycle(path: any): boolean;
}
/**
 * 图对象，这里的图默认是：有向、连通图
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
export declare class Graph {
    /**
     * 有向图还是无向图
     */
    hasDirection: boolean;
    /**
     * 顶点
     */
    vertexes: Array<Vertext>;
    /**
     * 边
     */
    edges: Array<Edge>;
    /**
     * 生成0-n棵虚拟树( 提出去放到system)
     * @param {Array} displayObjects
     */
    constructor(vertexes: Array<Vertext>, edges: Array<Edge>);
    /**
     * 是否零图(有节点，无边)
     */
    isZero(): boolean;
    /**
     * 是否平凡图(仅有一个节点，无边)
     */
    isAlone(): boolean;
    /**
     * 遍历整个图所有节点和边, 深度优先
     */
    traverse(begin?: Vertext, type?: 'depth' | 'breadth', rs?: any[], history?: Set<unknown>): any[];
    /**
     * 获取最大度顶点
     */
    getMaxDegreeVertext(): Vertext;
    /**
     * 获取最小度
     */
    getMinDegree(): number;
    getPathList(u: Vertext, v: Vertext, history?: Set<unknown>): Array<Path>;
    /**
     * 阶（Order）：图G中点集V的大小称作图G的阶。
     */
    getOrder(): number;
    /**
     * 目前版本暂未实现
     * 桥（Bridge）：若去掉一条边，便会使得整个图不连通，该边称为桥。
     */
    isBridge(): void;
    /**
     * 目前版本暂未实现
     *
     * 判断给定图是否当前图的子图。
     *
     * 子图（Sub-Graph）：当图G'=(V',E')其中V‘包含于V，E’包含于E，则G'称作图G=(V,E)的子图。每个图都是本身的子图。
     * @param g
     */
    isSubGraph(g: Graph): void;
    /**
     * 是不是一棵树
     * 图是树需要满足三个条件：
     * 1. 图中结点均连通，即结点属于同一个集合；
     * 2. 没有回路
     * 3. 是无向的
     */
    isTree(): boolean;
    /**
     * 严格按照方向->从指定节点遍历所有顶点
     * 1. 广度优先
     * 2. 到头或者再次遇到自己结束
     * @param graph
     * @returns
     */
    travelNext(rootVetext: Vertext): any[];
    clone(): Graph;
    check(): void;
}
export { Graph as default };
