import { RectPosition, StyleOptions } from './jtopo_type';
/**
 * 样式对象, 一般不直接使用
 *
 * 而是通过主题定义、图元的css({...})方法来自动管理
 */
export declare class Style {
    className: any;
    /**@protected */
    dirty: boolean;
    /**
     * 滤镜效果， 例如：
     *
     * 高斯模糊：'blur(5px)'
     *
     * 灰度： 'grayscale(100%)' 用于将图像转换为灰度的滤镜
     *
     * 褐色: 'sepia(100%)' 用于将图像转换为深褐色的滤镜。
     *
     * 锐化： 'contrast(150%) brightness(120%)' 这种滤镜效果可以增强图像的锐度和清晰度，使其看起来更加清晰、鲜明。
     *
     * 颜色矫正: 'saturate(200%) hue-rotate(180deg)' 这种滤镜效果可以调整图像的色彩和色调，使其看起来更加自然、真实。
     *
     * 反色：'invert(100%)' 这种滤镜效果可以将图像中的颜色反转，从而创建出截然不同的视觉效果。
     *
     * 透明度：'opacity(50%)' 这种滤镜效果可以改变图像的透明度，使其看起来更加半透明或不透明。
     *
     * 饱和度：'saturate(200%)' 这种滤镜效果可以改变图像的饱和度，使其看起来更加鲜艳或柔和。
     *
     * 对比度：'contrast(200%)' 这种滤镜效果可以增加或减少图像的对比度，从而改变其亮度和明暗程度。
     *
     * 色调： 'hue-rotate(90deg)' 用于对图像应用滤镜以设置图像的色调旋转.
     */
    filter?: string;
    /**
     * 于设置图片是否平滑，也就是是否抗锯齿
     *
     * true 表示图片平滑（默认值），false 表示图片不平滑
     */
    imageSmoothingEnabled?: boolean;
    /**
     * 边框宽度
     */
    borderWidth?: number;
    /**
     * 整体透明度
     */
    globalAlpha?: number;
    /**
     * 绘制模式
     */
    globalCompositeOperation?: GlobalCompositeOperation;
    /**
     * 填充样式, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
     */
    fillStyle?: string | CanvasGradient | CanvasPattern;
    /**
    * 线条样式, 对于Node而言就是边框线条。
    *
    * 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
    */
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    /**
     * 阴影
     */
    shadowBlur?: number;
    /**
     * 阴影颜色, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
     */
    shadowColor?: string;
    /**
     * 阴影X方向的长度
     */
    shadowOffsetX?: number;
    /**
     * 阴影y方向的长度
     */
    shadowOffsetY?: number;
    /**
     * 文本水平偏移量
     */
    textOffsetX?: number;
    /**
     * 文本垂直偏移量
     */
    textOffsetY?: number;
    /**
     * lineCap
     */
    lineCap?: CanvasLineCap;
    /**
     * lineJoin
     */
    lineJoin?: CanvasLineJoin;
    /**
     * 线宽度
     */
    lineWidth?: number;
    miterLimit?: number;
    /**
     * 字体, 如: "bold 20px sans-serif"
     */
    font?: string;
    /**
     * 字体左右对齐方式
     */
    textAlign?: CanvasTextAlign;
    /**
     * 字体基线
     */
    textBaseline?: CanvasTextBaseline;
    /**
     * 虚线，例如[3,2]
     */
    lineDash?: Iterable<number>;
    /**
     * 虚线偏移量
     */
    lineDashOffset?: number;
    /**
     * 文字位置
     */
    textPosition?: RectPosition;
    /**
     * 文字颜色, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
     */
    color?: string;
    /**
     * 边框和图形的间距
     */
    padding?: number;
    private _border;
    /**
     * 边框样式
     */
    borderStyle: null | 'solid' | 'dashed' | 'dotted';
    /**
     * 边框颜色, 如: "gray", "rgb(1,0,0)", "#FF0000"
     */
    borderColor?: string;
    /**
     * 边框圆角, 如: 5
     *
     * 也支持支持数组: [0, 10, 20, 30]，四个角（比较老的浏览器可能不支持）
     */
    borderRadius?: number | [number, number, number, number];
    private _backgroundSize?;
    backgroundWidth?: number;
    backgroundHeight?: number;
    private _background;
    private _backgroundPosition;
    private _backgroundImage;
    private backgroundWidthRate?;
    private backgroundHeightRate;
    private backgroundPositionX;
    private backgroundPositionY;
    private backgroundPositionXName;
    private backgroundPositionYName;
    private backgroundPositionXRate;
    private backgroundPositionYRate;
    backgroundRepeat?: 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-y' | string;
    _backgroundColor: any;
    get backgroundColor(): any;
    set backgroundColor(v: any);
    /**@protected */
    _backgroundImageObject: any;
    /**
     * 文字行高
     */
    lineHeight?: number;
    /**@protected */
    _textDirty: boolean;
    private _resLoadedBack;
    constructor(init?: Style | Object);
    isDirty(): boolean;
    /**@protected */
    getChangedProps(target?: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
    /**@protected */
    clear(): void;
    toJSON(imageIndexFn?: Function): import("./jtopo_type").SerializedDisplayObject;
    /**@protected */
    update(newState: StyleOptions): void;
    /**@protected */
    _getBackgroundRect(fillMaxWidth: number, fillMaxHeight: number, node: any): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    applyTo(ctx: any): void;
    calcGap(): number;
    /**@protected */
    static fromJSON(json: any, resourcesIndexMap: any): Style;
    /**@protected */
    static _styleHandle(style: any): void;
    /**
    * 测量字符串在某个样式下的尺寸（以下因素均可能影响结果：文本是否多行、字体、字号、行高）
    * @param lineCount text的行数
    */
    static measureText(text: string | Array<string>, style: Style, lineCount: number): {
        width: number;
        height: number;
        lineHeight: number;
    };
    get border(): any;
    /**
     * 边框, 如: solid 1px gray
     */
    set border(v: any);
    get background(): any;
    /**
     * 设置背景，如： "white url('./assets/img/grid.png') repeat",
     */
    set background(v: any);
    get backgroundImage(): any;
    /**
     * 背景图片, 如："abc.jpg", "url('aaaaaa.aa.png')"
     */
    set backgroundImage(v: any);
    get backgroundPosition(): any;
    /**
     * 背景位置, 如："center top", "10px 10px"
     */
    set backgroundPosition(v: any);
    get backgroundSize(): string;
    /**
     * 背景大小, 如："100px 100px", "100px"
     */
    set backgroundSize(v: string);
    /**
     * 字体大小， 例如： '20px', '12px'
     */
    set fontSize(size: string | number);
    get fontSize(): string | number;
    /**
    * 字体名称， 例如： 'sans-serif', 'serif'
    */
    set fontFamily(family: string);
    get fontFamily(): string;
    /**
     * 字体重量, 如 : "bold" 、"italic" 、"bold italic"
     */
    set fontWeight(weight: string);
    get fontWeight(): string;
}
declare abstract class StyleGradient {
    /**
     * 颜色列表
     * 例如: [[0, 'white'], [1, 'blue']]
     * 例如：[[0, 'white'], [0.5, 'red'], [1, 'blue']]
     */
    colors: Array<[number, string]>;
    /**
     * @protected
     * 总会被序列化的属性列表
     */
    allwaysSerializers: Array<string>;
    /**@protected */
    serializers: Array<string>;
    dirty: boolean;
    /**@protected */
    gradient?: CanvasGradient;
    constructor();
    update(): void;
    toJSON(): {};
    abstract getStyle(): CanvasPattern | CanvasGradient | null;
}
/**
 * 线性渐变
```js
let rg = new LinearGradient(0,0, 20, 20);
rg.addColorStop(0, 'white');
rg.addColorStop(0.5, 'red');
rg.addColorStop(1, 'blue');

// 也可以一次性设置：
rg.setColors([[0, 'white'], [0.5, 'red'], [1, 'blue']]);
```
 */
export declare class LinearGradient extends StyleGradient implements CanvasGradient {
    className: string;
    /**
     * 开始坐标x
     */
    startX: number;
    /**
     * 结束坐标y
     */
    startY: number;
    /**
     * 结束坐标x
     */
    stopX: number;
    /**
     * 结束坐标y
     */
    stopY: number;
    /**@protected */
    serializers: Array<string>;
    constructor(startX: number, startY: number, stopX: number, stopY: number);
    /**@protected */
    static fromJSON(json: any): LinearGradient;
    /**
     * 添加颜色停靠点到颜色列表中。
     * @param {Number} offset - 颜色停靠点的偏移量，通常是一个0到1之间的数值，表示在渐变中的位置。
     * @param {String} color - 颜色的表示，可以是CSS颜色字符串，如「rgb」或「#rrggbb」格式。
     */
    addColorStop(offset: number, color: string): void;
    /**
     * 设置颜色并更新状态
     * @param colors {Array} 颜色数组，用于更新当前对象的颜色
     */
    setColors(colors: Array<[number, string]>): void;
    /**@protected */
    getStyle(): CanvasGradient;
}
/**
 * 放射渐变
```js
let rg = new RadialGradient(0,0, 20, 0, 0, 30);
rg.addColorStop(0, 'white');
rg.addColorStop(0.5, 'red');
rg.addColorStop(1, 'blue');

//也可以一次性设置：
rg.setColors([[0, 'white'], [0.5, 'red'], [1, 'blue']]);
```
 */
export declare class RadialGradient extends StyleGradient implements CanvasGradient {
    className: string;
    /**
     * 开始坐标x
     */
    xStart: number;
    /**
     * 开始坐标y
     */
    yStart: number;
    /**
     * 结束坐标x
    */
    xStop: number;
    /** 结束坐标y */
    yStop: number;
    /**
     * 开始圆的半径
     */
    radiusStart: number;
    /**
     * 结束圆的半径
     */
    radiusEnd: number;
    /**@protected */
    serializers: Array<string>;
    constructor(xStart: number, yStart: number, radiusStart: number, xStop: number, yStop: number, radiusEnd: number);
    /**@protected */
    static fromJSON(pojo: any): RadialGradient;
    /**
     * 添加颜色停靠点到颜色列表中。
     * @param {Number} offset - 颜色停靠点的偏移量，通常是一个0到1之间的数值，表示在渐变中的位置。
     * @param {String} color - 颜色的表示，可以是CSS颜色字符串，如「rgb」或「#rrggbb」格式。
     */
    addColorStop(offset: any, color: any): void;
    /**
     * 设置颜色并更新状态
     * @param colors {Array} 颜色数组，用于更新当前对象的颜色
     */
    setColors(colors: any): void;
    /**@protected */
    getStyle(): CanvasGradient;
}
/**
 * 图案填充样式
```js
let pattern = new StylePattern('./assets/img/pattern.jpg', 'repeat');

node.css({
    fillStyle: pattern
})
```
 */
export declare class StylePattern extends StyleGradient implements CanvasPattern {
    className: string;
    /** 重复: 'repeat', 'no-repeat', 'repeat-x', or 'repeat-y' */
    repetition: string;
    /**@protected */
    imageObject?: HTMLImageElement;
    private imagePath?;
    private pattern?;
    serializers: Array<string>;
    constructor(imagePath: string, repetitionStyle?: any);
    static fromJSON(json: any): any;
    getStyle(): CanvasPattern;
    get image(): string;
    set image(src: string);
    /**
     * 设置将在填充或描边绘制操作期间用于模式的变换矩阵。
     * @param transform 可选的 DOMMatrix2DInit 对象，用于定义变换矩阵。
     * 如果未提供，则不执行任何操作。
     *
    */
    setTransform(transform?: DOMMatrix2DInit): void;
}
export { Style as default };
