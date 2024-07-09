import TextNode from '../TextNode';
/**
 * 提示、角标节点, 通常用于告警、提示。 节点的原点(0,0)默认是最下方居中位置
 */
export declare class TipNode extends TextNode {
    className: any;
    arrowsSize: number;
    shape: any;
    serializers: Array<string>;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    /**
     * @override
     */
    resizeToFitText(): void;
}
export { TipNode as default };
