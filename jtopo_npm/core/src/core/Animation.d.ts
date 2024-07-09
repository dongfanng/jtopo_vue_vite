import { PointLike } from "./jtopo_type";
export type EasingNames = 'easeLinear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce';
export type AnimationFrameData = number | Array<number | PointLike>;
export type AnimationOption = {
    /** 动画名称，方便管理 */
    name?: string;
    /**
     * 控制动画的数据起始值
     */
    from: AnimationFrameData;
    /**
     * 控制动画的数据结束值
     */
    to: AnimationFrameData;
    /**
     * 持续时间
     */
    duration?: number;
    /**
     * 每一帧的动画实际动作
     */
    update: Function;
    /**
     * 动画结束时的回调函数
     */
    onEnd?: Function;
    /**
     * 缓动函数名称
     */
    effect?: EasingNames;
    /**
     *重复次数（animation-iteration-count），默认1
        --可设置数值如： 5
        --也可设置为无限次: Infinity
     */
    times?: number;
    /**
     * 设置动画开始之前的延迟时间，默认为 0
     */
    delay?: number;
    /**
     * 运动方向（animation-direction）
    --normal 是正常运动

    --reverse 反向运动

    --alternate 运动完后，动画返回

    --alternate-reverse 反向运动完后，动画返回
     */
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | 'normal';
};
/**
 * 一般通过AnimationSystem来创建实例
```js:line-numbers
// 通常调用animationSystem的anime方法来创建实例:
let animation = stage.animationSystem.anime({
    from: 0,
    to: 1,
    update: (n) => {
        //flashBall.y = -100 * (1 - n);
    },
    effect: 'easeInQuart',
    duration: 1000,
    times: Infinity,
    direction: 'alternate'
});

// 播放
animation.play();

// play() 返回一个Promise对象
animation.play().then(function(){
    // 播放结束后的处理
});

// 暂停
animation.pause();

// 取消
animation.cancel();


```
 */
export declare class Animation {
    /** 名称 */
    name?: string;
    /**@protected */
    system: AnimationSystem;
    /** 初始数据集 */
    from: AnimationFrameData;
    /** 结束数据集 */
    to: AnimationFrameData;
    currentTime: number;
    /** 开始时间 */
    startTime: number;
    /** 持续时间, 默认为 1000 毫秒 */
    duration: number;
    /**
     * 设置动画开始之前的延迟时间，默认为 0
     */
    delay: number;
    /**
     * 运动方向（animation-direction）
    --normal 是正常运动

    --reverse 反向运动

    --alternate 运动完后，动画返回

    --alternate-reverse 反向运动完后，动画返回
     */
    direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    private fillMode;
    /**
     * 能够返回并设置一个可枚举值来描述一个动画的回放状态。
     */
    playState: 'idle' | 'pending' | 'running' | 'paused' | 'finished';
    /** 每一帧执行的动作函数 */
    update: Function;
    isPause: boolean;
    finished: boolean;
    delayed: boolean;
    /**
     *重复次数（animation-iteration-count），默认1
        --可设置数值如： 5
        --也可设置为无限次: Infinity
     */
    times: number;
    /**
     * 已经播放了多少次
     */
    playedTimes: number;
    /**@protected */
    stepAction: Function;
    /** 结束时的回调函数 */
    onEnd?: Function;
    private resolve;
    private reject;
    private promise;
    effect: EasingNames;
    /**
     *
     * 通过AnimationSystem来创建实例，直接new的动画并不能播放。
     *
     * start 、end 可以是数字，也可以是包含数字的数组
     * <pre>
     * 创建实例时start、end、time、action参数可以为空， 但是调用play()方法之前要确保都已经被赋过值。
     * </pre>
     * @param from
     * @param to
     * @param duration 动画事件
     * @param update 动画每一帧时执行的动作函数
     */
    constructor(from?: AnimationFrameData, to?: AnimationFrameData, duration?: number, update?: Function);
    /**
     * @param from
     * @param to
     * @param duration
     * @param update
     * @deprecated 已过时
     */
    set(from: AnimationFrameData, to: AnimationFrameData, duration: number, update?: Function): this;
    /**
     * 设置开始数据
     * @param from 结束数据
     * @deprecated 已过时
     */
    setFrom(from: AnimationFrameData): this;
    /**
     * 设置结束数据
     * @param end 结束数据
     * @deprecated
     */
    setTo(end: AnimationFrameData): this;
    /**
     * 设置各种参数
     * @since v2.5.0
     * @param opt
     */
    setAttr(opt: AnimationOption): this;
    /**
     * 设置动画每一帧的回调函数
     * @param action
     */
    onUpdate(action: Function): this;
    /**
     * 取消
     * @returns
     */
    cancel(): this;
    /**
     * 暂停
     * @returns {Animation} self
     */
    pause(): this;
    /**
     * 继续，从暂停处继续, 改成？resume
     * @returns {Animation} self
     */
    continue(): this;
    /**
     * 如果没有执行动作就返回false
     * @param now
     * @protected
     * @returns
     */
    tick(now: number): boolean;
    /**
     * 开始
     * @return {Promise} 自身
     */
    play(): Promise<any>;
    private _getTickAction;
}
/**
 * 动画系统
 *
```js

// 使用动画系统
let animationSystem = stage.animationSystem;

// 创建一个动画实例：模拟掉落 (节点从当前高度往下掉落200个像素)
let animation = animationSystem.anime({
    // node的当前高度
    from: node.y,

    // node当前高度向下 200像素
    to: node.y + 200,

    // 动画动作
    update: (n) => {
        node.y = n;
    },

    // 动画效果-缓动（有弹性的感觉）
    effect: 'easeOutBounce',

    // 动画时间
    duration: 2000,
});

// 播放
animation.play();

```
 */
export declare class AnimationSystem {
    /** 当前的动画列表 */
    animations: Array<Animation>;
    /**@protected */
    readonly timeline: {
        begin: string;
        end: number;
    };
    constructor();
    /**@protected */
    add(a: Animation): void;
    /**@protected */
    remove(a: Animation): void;
    /** 取消所有动画 */
    cancelAll(): void;
    /**@protected */
    tick(now: number): boolean;
    /**
     * 生成一个动画实例
     * @param opt
     * @returns
     */
    anime(opt: AnimationOption): Animation;
}
