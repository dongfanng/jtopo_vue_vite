import { StyleOptions, ThemeContentType } from "./jtopo_type";
/**
 * 主题
 * @since 2.4.0
 */
export declare class Theme {
    /** 名称 */
    readonly name: string;
    private content;
    constructor(name: string, config: ThemeContentType);
    /**@protected */
    copy(newName: string): Theme;
    /**
     * 设置某类的样式
     *
     * 例如：theme.setStyle('Node', {fillStyle:'blue'});
     *
     * @param className 类名称
     * @param style
     */
    setStyle(className: string, style: StyleOptions): void;
    /**
     *  根据类名称获取样式
     *  例如：let styles = theme.getStyle('Node');
     */
    getStyle(className: string): any;
}
/**@ignore */
export declare let DefaultLightTheme: Theme;
/**
 * 默认深色主题
 * @ignore
 */
export declare let DefaultDarkTheme: Theme;
