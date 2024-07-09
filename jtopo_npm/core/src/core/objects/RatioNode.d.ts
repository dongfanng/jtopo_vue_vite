import Node from '../Node';
/**
 * 比率节点 ，用矩形填充的方式表达：比例、利用率、占比、进度条
 * <p>可以设置方向</p>
* 例如：

```js
const ratioNode = new RatioNode('', 283, 465, 80, 40);
ratioNode.ratio = 0.65;
ratioNode.direction = 'right';
ratioNode.css({
    border: '2px solid black',
    fillStyle: 'gray'
});
```
 */
export declare class RatioNode extends Node {
    className: any;
    /**
     * 比率：通常取值范围是[0-1], 默认: 0.5
     */
    ratio: number;
    /**
     * 方向，朝向：right、left、up、down ，默认：right
     */
    direction: string;
    /**
     * 序列化属性列表
     */
    serializers: Array<string>;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    draw(ctx: any): void;
}
export { RatioNode as default };
