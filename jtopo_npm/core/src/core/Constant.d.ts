/**
 * jtopo自身的引用
 */
export declare const jtopo: any;
export declare const Config: {
    /** 合并相似点的最小误差 */
    PointClosestEpsilon: number;
    DefaultLightName: string;
    DefaultDarkName: string;
    flatten: boolean;
};
/** 2 * Math.PI */
export declare const PI2: number;
export declare const VERSION = "#version#";
/**
 * StageMode 常量
*/
export declare const StageMode: {
    drag: string;
    edit: string;
    normal: string;
    select: string;
    view: string;
};
export declare const Cursor: {
    auto: string;
    move: string;
    hand: string;
    crosshair: string;
    s_resize: string;
    n_resize: string;
    w_resize: string;
    e_resize: string;
};
/**
 * Position常量
 */
export declare const Direction: {
    horizontal: string;
    vertical: string;
};
/**
 * Position常量
 */
export declare const Position: {
    lt: string;
    ct: string;
    rt: string;
    lm: string;
    center: string;
    rm: string;
    lb: string;
    cb: string;
    rb: string;
    nearest: string;
    begin: string;
    end: string;
    ctrlPoint: string;
    ctrlPoint1: string;
    ctrlPoint2: string;
    fold1: string;
    fold2: string;
    mid: string;
    mid1: string;
    mid2: string;
    up: string;
    down: string;
    left: string;
    right: string;
};
/**@ignore */
export declare const PositionInvertMap: {
    lt: string;
    ct: string;
    rt: string;
    rm: string;
    rb: string;
    cb: string;
    lb: string;
    lm: string;
};
export declare const DefaultZIndexs: {
    HandlerLayerCanvas: number;
    FullWindowDom: number;
    Link: number;
    Node: number;
    EditorNewLink: number;
    IntersectPoint: number;
    NodeCtrlBox: number;
    LinkCtrlBox: number;
};
/**@ignore */
export declare const StageLocalDeep = 0;
/**@ignore */
export declare const LayerLocalDeep = 1;
export declare const EventNames: {
    zoom: string;
    resize: string;
    zoomAfter: string;
    fullWindow: string;
    modeChange: string;
    groupdrag: string;
    groupdragend: string;
    selectObject: string;
};
/**@ignore */
export declare function setProto(value: any): (target: any, key: string) => void;
