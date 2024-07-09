import { PickType } from './DisplayObject';
import { Node } from './Node';
/**
 * 文本节点
 *
```js
// 示例
let textNode = new TextNode('This is a\nTextNode with \ntext warp.', 81, 283);

// 节点的尺寸随文本内容自动调整
textNode.autoSize = true;

textNode.css({
    padding: 5,
    lineHeight: 12,
    border: 'solid 2px #E1E1E1',
    font: 'italic 12px arial',
    color: 'rgba(0, 154, 147,1)'
});
```
 */
export declare class TextNode extends Node {
    className: any;
    /**
     * 鼠标拾取方式（节点内容，还是整个节点矩形区域)
     */
    pickType: PickType;
    /**
     * 自动调整方向，防止文字头向下
     **/
    autoDirection: boolean;
    /**@protected */
    _autoSize: boolean;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number, autoSize?: boolean);
    /**
     * 尺寸是否自动适应文本
     */
    get autoSize(): boolean;
    set autoSize(v: boolean);
    /**@protected */
    updateMatrix(): void;
    /**
     * @protected
     * @override */
    _updateText(): void;
    /**
     * 节点尺寸自动缩放至适合文本
     */
    resizeToFitText(): void;
    /**
     * @override
     * @protected
     */
    _calcTextPosition(): any;
}
export { TextNode as default };
