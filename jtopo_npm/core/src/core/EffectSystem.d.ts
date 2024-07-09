import { Animation, AnimationSystem } from "./Animation";
import DisplayObject from "./DisplayObject";
import { Layer } from "./Layer";
import Link from "./Link";
import Node from "./Node";
import Stage from "./Stage";
import { RectPosition } from "./jtopo_type";
/**
 * 闪烁特效参数
 */
export type FlashOpt = {
    /**
     * 闪烁次数
     */
    times?: number;
    /**
     * 持续时间
     */
    duration?: number;
};
/** 线条（虚线）流动特效参数 */
export type FlowOpt = {
    /**
     * 虚线样式, 如: [3, 2]
     */
    lineDash?: Array<number>;
    /**
     * 方向：clockwise(顺时针) | anticlockwise (逆时针)
     */
    direction?: 'clockwise' | 'anticlockwise';
    /**
     * 速度，默认: 10000毫秒, 越小流动速度越快
     */
    duration?: number;
    /**
     * lineDashOffset的总偏移量, 默认300
     */
    distance?: number;
};
/** ‘涟漪’特效参数 */
export type RipplingOpt = {
    /**
     * 最大半径
     */
    radius?: number;
    /**
     * 颜色
     */
    color?: string;
    /**
     * 圈圈的数量
     */
    count?: number;
    /**
     * 圆圈的粗细
     */
    lineWidth?: number;
};
export type ExpandScaleOpt = {
    /**
     * 展开时的不动‘点’位置，以该点为固定
     */
    position?: RectPosition;
    /** 开始宽度，默认0 */
    beginWidth?: number;
    /** 开始高度，默认0 */
    beginHeight?: number;
};
/** 节点逐渐收起来的效果参数 */
export type UnexpandScaleOpt = {
    /**
    * 收起时的不动‘点’位置，以该点为固定
    */
    position?: RectPosition;
    /** 收起后的最小宽度，默认为0 */
    minWidth?: number;
    /** 收起后的最小高度，默认为0 */
    minHeight?: number;
};
/**
 * 动画/特效节点（Animation Effect Node)
 */
export declare class AENode {
    /**
     * 根对象(一般是一个Node或者Link)，需要放入Layer或者其他Node内，才会被看到
     */
    objects: Array<DisplayObject>;
    /**
     * 动画列表
     */
    animationList: Array<Animation>;
    constructor(rootNode: Array<DisplayObject>, animationList: Array<Animation>);
    /**
     * 移除
     */
    remove(): void;
    /**
     * 播放
     */
    play(): void;
}
/**
 * 特效系统

```js

// stage.effectSystem.特效(对象, 特效参数:{参数n:参数值})
// 例如:
stage.effectSystem.flash(node, {times: 5, duration:500}).play();
```

* 一个特效源码实现：
```ts
    
// 生成一个线条流动的特效动画实例
flow(nodeOrLink: Node | Link, opt: { lineDash?: Array<number>, direction?: 'clockwise'|'anticlockwise' } = {}) {
    let lineDash = opt.lineDash || [3, 2];
    let direction = opt.direction || 'clockwise';

    let dir  = direction == 'clockwise' ? 1 : -1;

    let animationSystem = this.animationSystem;

    nodeOrLink.css({
        lineDash: lineDash
    });

    let animation = animationSystem.anime({
        from: [0],
        to: [300],
        update: (arr) => {
            nodeOrLink.css({
                lineDashOffset: -arr[0] * dir
            });
        },
        times: 20,
        duration: 10000
    });
    return animation;
}
```

 */
export declare class EffectSystem {
    animationSystem: AnimationSystem;
    stage: Stage;
    constructor(stage: Stage, animationSystem: AnimationSystem);
    /**
     * 移动’镜头‘到某个坐标的特效
     */
    xyToCenter(layer: Layer, opt?: {
        x: number;
        y: number;
    }): Animation;
    lookAt(layer: Layer, opt?: {
        x: number;
        y: number;
    }): Animation;
    /**
     * 生成一个闪烁的特效动画实例
     * @param nodeOrLink
     * @param times
     * @param duration
     * @returns 一个闪动动画
     */
    flash(nodeOrLink: Node | Link, opt?: FlashOpt): Animation;
    /**
     * 节点展开, 节点的宽高从指定尺寸（默认从0）逐渐变为当前尺寸
     */
    expandScale(node: Node, opt?: ExpandScaleOpt): Animation;
    /**
     * 节点逐渐收起来的效果
     * @param node
     */
    unexpandScale(node: Node, opt?: UnexpandScaleOpt): Animation;
    /**
     * 生成一个线条流动的特效动画实例
     * @param nodeOrLink
     */
    flow(nodeOrLink: Node | Link, opt?: FlowOpt): Animation;
    /**
     * 生成一个’涟漪‘（圆形扩散）的特效节点对象
     * @returns
     */
    rippling(opt?: RipplingOpt): AENode;
    /**
     * 颜色滤镜
     * @param node
     * @param color
     */
    colorFilter(node: Node, color: Array<number>): void;
    /**
     * 使用指定颜色修改节点的图片, 该方法性能敏感，不适合在循环中频繁调用
     *
```js
// 这是一个异步方法，如果节点的图片还在加载中，会等加载完毕后修改节点的图片
// 源码参考:
imageFilter(node: Node, color: Array<number> ){
    node.getImage((image) => {
        if(image == null){
        return;
        }

        //生成一张带颜色滤镜的新图片
        let filterImg = ImageUtil.colorFilter(image, color);

        // 替换节点的原图片
        node.setImage(filterImg);
    });
}
```
     *
     * @param node
     * @param color
     */
    imageFilter(node: Node, color: Array<number>): void;
    /**
     * 在连线的中间位置放置一个文本符号(默认是emoji符号：❌)
     *
     * 可以用来表示：断开、告警、状态等
     *
     * 类似的其他emoji符号：🚫 ❗ ️💢️ ❓ ✅
     *
     * @param node
     * @param color
     */
    linkMark(link: Link, opt?: {
        font?: string;
        color?: string;
        text?: string;
    }): Node;
    /**
     * ‘水’ 特效, 默认渐变色为: ['white', 'green', 'rgb(rgb(0,87,55))']
     *  即：白色 -> 绿色 -> 墨绿色
```js
    let waterEffect = stage.effectSystem.waterLike(['white', 'green', 'rgb(rgb(0,87,55))'], 80, 80,);
    let node = waterEffect.objects[0];
    node.setXY(0, 0);
    layer.addChild(node);
    waterEffect.play();
```
* @param width 初始化的宽度, 默认60
* @param height 初始化的高度, 默认60
* @param colors 颜色 [color1, color2, color3], 默认：['white', 'green', 'rgb(rgb(0,87,55))']
     */
    waterLike(colors?: Array<string>, width?: number, height?: number): AENode;
}
export { EffectSystem as default };
