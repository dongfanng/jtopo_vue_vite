import { Point } from './Point';
/** 矩形方位 */
export type RectPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb';
/** 连接点 */
export type ConnectPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb' | 'nearest';
/** 文本对齐 */
export type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center';
/** 文本基线 */
export type TextBaseline = 'top' | 'bottom' | 'middle' | 'alphabetic' | 'hanging';
/** Stage模式 */
export type StageModeType = 'normal' | 'drag' | 'edit' | 'view' | 'select';
/** 鼠标事件 */
export type MouseEventType = 'mousedown' | 'mouseup' | 'mousemove' | 'mouseenter' | 'mouseout' | 'mousewheel' | 'click' | 'dblclick';
export type DirectionType = 'up' | 'down' | 'left' | 'right';
export type RatioDirection = DirectionType;
/** 连线方向, 水平 或者 垂直 */
export type LinkDirection = 'horizontal' | 'vertical';
/** Point对象或者拥有x、y的对象 */
export type PointLike = Point | {
    x: number;
    y: number;
};
export type EndpointOffset = number | PointLike;
/**
 * @ignore
 * 坐标系类型
 */
export type CSType = 'geometric' | 'link';
export type Vec2 = [number, number];
export type ThemeContentType = {
    Layer?: StyleOptions;
    SelectArea?: StyleOptions;
    SelectedStyle?: StyleOptions;
    LinkArrow?: StyleOptions;
    LinkLabel?: StyleOptions;
    Node: StyleOptions;
    TextNode: StyleOptions;
    CircleNode: StyleOptions;
    TipNode: StyleOptions;
    ShapeNode: StyleOptions;
    VideoNode: StyleOptions;
    RatioNode: StyleOptions;
    Link: StyleOptions;
    FoldLink: StyleOptions;
    CurveLink: StyleOptions;
    AutoFoldLink: StyleOptions;
    BezierLink: StyleOptions;
    ArcLink: StyleOptions;
    FlexionalLink: StyleOptions;
};
type ThemeType = {
    name: string;
    content: ThemeContentType;
};
/**
 * 序列化后的json格式
 */
export type SerializedJson = {
    /** jtopo版本 */
    version: string;
    /** 用户自定义的额外信息 */
    info?: {
        [key: string]: any;
    };
    Roots: Array<any>;
    /** 用户自定义的样式 */
    CustomStyle: {
        /** 当前使用的主题 */
        [themeName: string]: any;
        /** 用户自定义的主题 */
        themes?: {
            [key: string]: ThemeType;
        };
        /** 通过defClass定义的样式 */
        styles?: {
            [key: string]: StyleOptions;
        };
    };
    Styles: Array<any>;
    /** 资源 */
    Resources: Array<any>;
    Shapes: Array<any>;
    DisplayObjects: Array<SerializedDisplayObject>;
    /** 脚本代码 */
    script?: any;
};
export type SerializedDisplayObject = {
    [key: string]: any;
    id: number;
    className: string;
    isLayer?: boolean;
    isLink?: boolean;
    isNode?: boolean;
    name?: string;
    parent?: number;
    image?: number;
    style?: number;
    shape?: any;
    begin?: {};
    end?: {};
    label?: number;
    beginArrow?: {};
    endArrow?: {};
};
export type StyleOptions = {
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
     *
     * 实际应用中有时候设置为false效果反而更好，如果遇到图片模糊的情况，可以尝试修改此属性对比
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
     * 填充样式
     */
    fillStyle?: string | CanvasGradient | CanvasPattern;
    /**
    * 线条样式, 对于Node而言就是边框线条
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
     * 文字
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
     * 虚线，例如[3,2], [5, 8, 2]
     */
    lineDash?: Iterable<number>;
    /**
     * 虚线偏移量
     */
    lineDashOffset?: number;
    /**
     * 文字行间距(不是很精确)
     */
    lineSpacing?: number;
    /**
     * 文字位置
     */
    textPosition?: RectPosition;
    /**
     * 文字颜色, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
     */
    color?: string;
    /** 边框与里面图形的间距, 例如: 10 */
    padding?: number;
    /**
     * 边框样式
     */
    borderStyle?: null | 'solid' | 'dashed' | 'dotted';
    /**
     * 边框颜色, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)"
     */
    borderColor?: string;
    /**
     * 边框圆角, 如: 5
     */
    borderRadius?: number | [number, number, number, number];
    lineHeight?: any;
    /**
     * 边框, 如: solid 1px gray
     */
    border?: string;
    /**
     * 背景图片, 如："ulr('aaaaaa.aa.png')"
     */
    backgroundImage?: string;
    /**
     * 设置背景，如： "white url('./assets/img/grid.png') repeat",
     */
    background?: string;
    /**
     * 背景位置, 例如："center center"
     */
    backgroundPosition?: string;
    /**
     * 背景大小, 如: "100px 100px"
     */
    backgroundSize?: string;
    /**
     * 背景重复方式, 例如: "repeat"、"repeat-x"、"repeat-y"、"no-repeat"
     */
    backgroundRepeat?: any;
    /** 背景颜色, 如: "red"、"gray"、"rgb(1,0,0)"、 "#FF0000"、"rgba(255,0,0,0.8)" */
    backgroundColor?: any;
    /** 文本偏移量-x */
    textOffsetX?: number;
    /** 文本偏移量-x */
    textOffsetY?: number;
    /** 字体大小, 如: '12px'、'20px' */
    fontSize?: string | number;
    /** 字体名称， 例如： 'sans-serif', 'serif' */
    fontFamily?: string;
    /** 字体重量, 如 : "bold" 、"italic" 、"bold italic" */
    fontWeight?: string;
};
export type ToJsonOption = {
    /**
     * 完全自定义的描述信息, 例如: title: "XXX画面", author:"作者..", date: "2024-02-04", ...
     */
    info?: any;
    /** 是否将图片以base64的形式内联到json */
    imageToBase64?: boolean;
    /** 脚本代码（字符串） */
    script?: string;
};
export {};
