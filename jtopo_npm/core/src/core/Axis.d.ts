import Style from './Style';
/**
 * 坐标轴对象
 */
export declare class Axis {
    style: Style;
    /**
     * 是否可见，默认隐藏
     */
    visible: boolean;
    styleX: Style;
    styleY: Style;
    lineDashScale: number;
    constructor();
    show(): void;
    hide(): void;
}
