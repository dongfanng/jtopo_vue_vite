import { Node } from '../Node';
/**
 * @ignore
 * 自适应布局(边界随子元素位置变化）
 */
export declare class AutoBoundLayout {
    /**
     * 执行布局，
     * @param node node对象的尺寸和位置根据字节点变化
     */
    doLayout(node: Node): void;
}
export { AutoBoundLayout as default };
