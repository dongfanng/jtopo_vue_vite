/**
 * cavnas 设置字体只能通过一个 font 属性，
 *
 * 该类可以对font属性里的属性做细化操作，可以单独设置字体、字号、粗体、斜体
 *
```js
// 例如:
let fontInfo = new FontInfo('normal normal 10px sans-arial');

fontInfo.setFamily('arial');
fontInfo.setSize('15px');
fontInfo.setBold('bold');
fontInfo.setItalic('normal');

// 粗体、斜体切换
fontInfo.toogleBold();
fontInfo.toogleItalic();

node.css({
    font: fontInfo.toStyleFont() //->"bold normal 15px arial"
});
```
 *
 */
export declare class FontInfo {
    boldWeight: string;
    italicWeight: string;
    size: string;
    family: string;
    constructor(fontStr: string);
    private parseFontDesc;
    /**
     * 获取字体权重
     * @returns
     */
    getFontWeight(): string;
    /**
     * 设置字体权重
     * setFontWeight('bold')、setFontWeight('italic')
     * setFontWeight('bold normal')、setFontWeight('normal italic')、setFontWeight('bold italic')
     * @param weight 字体权重
     */
    setWeight(weight: string): void;
    /**
     * 设置字体
     * @param family 字体
     */
    setFamily(family: string): void;
    /**
     * 设置字体大小
     * @param size 字体大小
     */
    setSize(size: string): void;
    /**
     * 设置加粗
     * @param bold 加粗
     */
    setBold(bold: string): void;
    /**
     * 设置斜体
     * @param italic 斜体
     */
    setItalic(italic: string): void;
    /**
     * 切换加粗
     */
    toogleBold(): void;
    /**
     * 切换斜体
     */
    toogleItalic(): void;
    /**
     * 转换为符合canvas的样式字符串
     *
    * @returns
    */
    toStyleFont(): string;
}
