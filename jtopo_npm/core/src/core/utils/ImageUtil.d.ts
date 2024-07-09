/**
 * 图片相关工具类
 */
export declare class ImageUtil {
    private static canvas;
    private static ctx;
    /**
     * 创建网格背景图片（图片为Base64编码形式: data:image/svg+xml;charset=UTF-8,....）
     * @param width
     * @param height
     * @param row
     * @param col
     * @param fillStyle
     * @param strokeStyle
     */
    static bgGrid(w: number, h: number, row: number, col: number, fillStyle?: string, strokeStyle?: string): string;
    /**
     * 创建网格背景图片（图片为URL形式: data:image/svg+xml;charset=UTF-8,....）
     * @param width
     * @param height
     * @param row
     * @param col
     * @param fillStyle
     * @param strokeStyle
     * @returns
     */
    static createGridImage(width: number, height: number, row: number, col: number, fillStyle: string, strokeStyle: string): string;
    /** 系统默认的‘亮色’背景网格图 */
    static createLightGridImg(): string;
    /** 系统默认的‘暗色’背景网格图 */
    static createDarkGridImg(): string;
    /**
     * SVG字符串转成图片格式的URL
     * @returns 'data:image/svg+xml;charset=UTF-8,' + svgString;
     */
    static svgToImageUrl(svgString: string): string;
    private static canvasColorFilter;
    /**
     * 根据图片对象和颜色 生成一个新的Image对象
     * 例如： ImageUtil.colorFilter(image, [255, 0, 0])
     * 或者自定义滤镜：
```js
const filterImg = ImageUtil.colorFilter(img, function (r, g, b, a) {
    g = g > 0 ? 255 : 0;
    return [r, g, b, a];
});
```
     * @param image
     * @param color
     * @returns
     */
    static colorFilter(image: HTMLImageElement, color: Array<number> | Function): HTMLImageElement;
    /**
     * 将一个图片对象转成Base64编码格式
     * @param image
     * @returns
     */
    static imageToBase64(image: HTMLImageElement): string;
    static parseImgUrl(url: any): any;
}
