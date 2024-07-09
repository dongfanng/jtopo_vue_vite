import DisplayObject from '../DisplayObject';
import { Link } from '../Link';
import { Node } from '../Node';
import { PointLike } from '../jtopo_type';
export type Shape_Names = "diamond";
/**@ignore */
export declare class NodeHelper {
    /**
     * 创建一个多边形节点
     * @param edgeCount
     * @param width
     * @param height
     * @returns
     */
    static createPologyNode(edgeCount: number, width?: number, height?: number): Node;
    /**
     *  返回所有对象的矩形复合而成的更大矩形
     */
    static getUnionRect(arr: Array<any>): any;
    /**
     * 增量平移节点，但子节点保持屏幕左边不变
     * @param node
     * @param dx 增量x
     * @param dy 增量y
     */
    static setXYButChildFixed(node: Node, dx: number, dy: number): void;
    /**
     * 调整节点对象的尺寸：尺寸刚好覆盖住所有子节点
     *
     * 已过时，请使用: stage.layoutSystem.sizeFitToChildren 代替
     * @deprecated
     */
    static sizeFitToChildren(node: Node, padding?: number): void;
    /**
     * 将一组Node的中心点平移到指定x，y
     * @param {Array} nodes
     * @param {number} x
     * @param {number} y
     */
    static translateObjectsCenterTo(objects: Array<Node>, x: number, y: number): void;
    /**
     * 先序递归遍历Node和Link，从指定节点或者连线开始
     * @static
     * @param {DisplayObject} obj 开始对象，可以是Node也可以是Link
     * @returns Array 先序排序好的对象数组，有Node、Link对象
     */
    static travel(obj: DisplayObject, fn: any, parent: any, rs?: Array<DisplayObject>): DisplayObject[];
}
/**@ignore */
export declare class LinkHelper {
    /**
     * 断开对象的连接关系
     * @param obj
     * @param excepts 需要排除掉的
     */
    static disconnect(obj: DisplayObject, excepts?: Array<Link>): void;
    /**
     * 给link创建一个默认的标签
     *
     * 默认含义：
```
     1. 标签采用TextNode
     2. 节点尺寸随文本内容和样式自动变化
     3. 默认在link的中心位置的上方
     4. 不响应鼠标事件、不可拖拽、（编辑模式下：不可被编辑、不可被画线）
```
参考代码:
```js
static createLabel(link: Link, text: string): Node {
    if (link.label == null) {
        const node = new TextNode(text);
        node.editable = false;
        node.draggable = false;
        node.connectable = false;
        node.mouseEnabled = false;
        node.autoSize = true;

        node.resizeToFitText();
        node.y = -node.height / 2;

        node.setRotateCenter('cb');
        LinkHelper.asLabel(link, node);
        return node;
    }
....
```
     * @param link
     * @param text
     * @deprecated 已过时，未来将删除
     * @returns
     */
    static createLabel(link: Link, text: string): Node;
    /**
     * 将指定节点作为连线的默认文本
     *
     * 默认的含义：
```
    1. 根据不同Link设置不同的原点坐标，因为不同Link的中心点是不一样的
    2. 自动移除lable上老的标签对象
```
源码参考：
```js
static asLabel(link: Link, node: Node) {
    if (link.label != null && link.label !== node) {
        link.removeChild(link.label);
    }
    link.label = node;
    link.addChild(node);

    // 计算出原点, 如果link还没有添加到一个父类里，getPoints是得不到的
    let segIndex = 0;
    let t = 0.5;

    if (link instanceof FoldLink) {
        t = 1;
    } else if (link instanceof FlexionalLink) {
        segIndex = 1;
    } else if (link instanceof AutoFoldLink) {
        segIndex = 2;
    }

    node.setXYOnLink(segIndex, t);
    return node;
}
```
     * @deprecated 已过时，未来将删除
     * @returns
     */
    static asLabel(link: Link, node: Node): Node;
    /**
     * 计算出link对象的选段中间点索引 和 t值
     * @param link
     * @returns
     */
    static getMiddleOrigin(link: Link): {
        segIndex: number;
        t: number;
    };
    /**
     * 生成箭头节点
     * @deprecated
     * @returns
     */
    static createArrow(vertices?: Array<PointLike>, width?: number, height?: number): Node;
    /**
     * 将指定节点作为连线的开始箭头
     * @deprecated
     * @returns
     */
    static asBeginArrow(link: Link, node: Node): Node;
    /**
     * 将指定节点作为连线对象的 结束箭头
     * @deprecated
     * @returns
     */
    static asEndArrow(link: Link, node: Node): Node;
}
