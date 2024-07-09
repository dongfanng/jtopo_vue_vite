import Rectangle from '../Rectangle';
import VirtualNode from '../layout/VirtualNode';
/**@ignore */
declare class VirtualTree {
    root: VirtualNode;
    descendants: Array<VirtualNode>;
    allVirtualNodes: Array<VirtualNode>;
    allObjects: Array<any>;
    indexData: Array<Array<VirtualNode>>;
    deep: number;
    constructor(root: VirtualNode);
    index(): void;
    getRect(): Rectangle;
    centerTo(x: any, y: any): this;
    translateTo(x: any, y: any): this;
    translateWith(dx: any, dy: any): this;
    getLeafs(): VirtualNode[];
}
export { VirtualTree as default };
