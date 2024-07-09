/**
 * 字体工具类， 提供了一些文本尺寸测量功能
 *
 * 可以将测量结果缓存来提高性能
 */
export declare class FontUtil {
    constructor();
    /**
     * 测量单行文本尺寸
     *
     * （谷歌浏览器默认的字体是："10px sans-serif"）
     *
     * let size = FontUtil.measureTextSize('测试文本', 'normal 12px 宋体');
     *
     * let width = size.width;
     * let height = size.height;
     */
    static measureTextSize(text: string, font?: string): {
        width: number;
        height: number;
    };
    /**
     * 测量多行尺寸
     *
     * （谷歌浏览器默认的字体是："10px sans-serif"）
     *
     * let size = FontUtil.measureTextArraySize(['第一行', '第二行长度'], 'normal 12px 宋体');
     *
     * let width = size.width;
     * let height = size.height;
     */
    static measureTextArraySize(textArr: Array<string>, font: string): {
        width: number;
        height: number;
    };
}
