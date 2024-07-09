import DisplayObject from "./DisplayObject";
import { SerializedJson, StyleOptions } from "./jtopo_type";
import { Stage } from "./Stage";
import { Style } from "./Style";
import { Theme } from "./Theme";
/**
 * 样式系统
```js
// 设置’主题‘，系统目前自带了两个, 例如：
stage.styleStyle.setTheme('DefaultDark');
stage.styleStyle.setTheme('DefaultLight');

// 定义一个样式
stage.styleSystem.defClass('.active', {
    color: 'red',
    font: '10px sans-serif'
});

//
node.addClass('.active');
link.addClass('.active');

node.removeClass('.active');
```
 */
export declare class StyleSystem {
    /**
     * 所有主题
     * @since 2.4.0
     */
    themes: {};
    /**@protected */
    defStyles: {};
    /**@protected */
    stage: Stage;
    /**
     * 当前主题
     * @since 2.4.0
     */
    currentTheme: Theme;
    /**
     * 系统默认的选中外观颜色（节点选中时的矩形框的颜色、连线被选中时的阴影颜色）
     * @deprecated 2.4.0 已经弃用
     */
    selectedStyle: any;
    constructor(stage: Stage);
    addTheme(theme: Theme): void;
    getTheme(name: string): Theme;
    /**@protected */
    customStyleToJSON(resourceIndexFn: Function): {
        themeName: string;
        themes: any;
        styles: {};
    };
    /**@protected */
    fromJson(json: SerializedJson): void;
    /**
     * 定义一个样式
     *
     *  例如： defClass('.mystyle', {color:'red', ...})
     *
     *  例如： defClass('Node', {color:'red', ...})
     *
     * @param name .开头的名称 或者 类名称
     * @param styleOpt
     */
    defClass(name: string, styleOpt: Style | StyleOptions): void;
    /**
     * 移除一个样式, 通过addClass添加到某个节点或者连线的需要手工移除
     *
     * 通常用来移除 非.开头的定义，例如：removeClass('Node')
     * @param name
     */
    removeClass(name: string): void;
    getClass(name: string): any;
    /**@protected */
    markDirty(): void;
    /**@protected */
    start(): void;
    /**
     * 设置主题
     * @param themeName 名称
     */
    setTheme(themeName: string): void;
    /**
     * 获取指定对象计算后的样式
     * @param obj
     * @returns
     */
    getComputedStyle(obj: DisplayObject): Style;
    /**@protected */
    computeStyle(obj: DisplayObject): Style;
    /**
    * 基于某个主题，定义新的主题
    * @param themeBaseName
    * @param newThemeName 新主题的名称
    */
    defTheme(themeBaseName: string, newThemeName: string): Theme;
}
