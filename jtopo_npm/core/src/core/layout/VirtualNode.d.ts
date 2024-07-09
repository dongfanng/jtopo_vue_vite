import Rectangle from '../Rectangle';
/**
 * @ignore
 * 虚拟节点
 *
 * 布局计算时不实际操作节点对象，而是节点对象生成的虚拟节点
 */
export declare class VirtualNode {
    x: number;
    y: number;
    width: number;
    height: number;
    rect: Rectangle;
    parent?: VirtualNode;
    children: any[];
    object: any;
    constructor(x?: number, y?: number, w?: number, h?: number);
    fromObject(object: any): void;
    setObject(object: any): void;
    getRect(recursive?: boolean): Rectangle;
    getChildrenRect(recursive: any): any;
    translateWith(dx: any, dy: any): void;
    translateTo(x: any, y: any): void;
    addChild(child: any): void;
    translateWithRecursive(dx: any, dy: any): void;
    flatten(cond?: Function): VirtualNode[];
    toString(): string;
    /**
     *  返回所有对象的矩形复合而成的更大矩形
     */
    static getVNodeUnionRect(arr: Array<any>): any;
    static flatten(arr: Array<any>, cond?: Function): any[];
}
export { VirtualNode as default };
