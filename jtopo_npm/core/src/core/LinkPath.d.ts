import DisplayObject from "./DisplayObject";
import { Endpoint, LinkTarget } from "./Endpoint";
import Link from "./Link";
/**
 * 维护一个 Endpoint 列表
 */
export declare class LinkPath {
    endpoints: Array<Endpoint>;
    constructor();
    toJSON(objIndexMap: Map<DisplayObject, number>, link: Link): any[];
    set(targets: Array<LinkTarget>): Endpoint[];
    /** 在指定索引位置后面插入一个连接点 */
    insert(target: LinkTarget, index?: number): Endpoint;
    replace(target: LinkTarget, index: number): void;
    /** 移除指定位置的索引 */
    remove(index: number): void;
    setBegin(target: LinkTarget): void;
    setEnd(target: LinkTarget): void;
    getLength(): number;
    getBegin(): Endpoint;
    getEnd(): Endpoint;
}
