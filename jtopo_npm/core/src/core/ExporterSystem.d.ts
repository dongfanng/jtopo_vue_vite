import { DisplayObject } from "./DisplayObject";
import { OverviewRender } from "./Overview";
import Stage from "./Stage";
/**
 * 导出系统，可以导出为图片、导出并下载图片、导出json文件
 */
export declare class ExportSystem {
    render: OverviewRender;
    stage: Stage;
    constructor(stage: Stage);
    /**
     * 将指定DisplayObject对象转成Base64图片编码
     *
     * stage.toDataURL([node1, node2]);
     *
     * 返回示例: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby...
     *
     * @param postProcessing 后期效果处理
     * @returns
     */
    toDataURL(objects: DisplayObject | Array<DisplayObject>): string;
    /**
     * 将指定对象转成Image对象
     * @param objects
     * @returns
     */
    toImage(objects: DisplayObject | Array<DisplayObject>): HTMLImageElement;
    /**
     * 导出图片
     */
    saveAsLocalImage(objects?: Array<DisplayObject>, fileName?: string): void;
    /**
     * 导出成图片，并在浏览器新标签页打开
     */
    saveImageInfo(objects?: Array<DisplayObject>): void;
    /**
     * 下载为文件
     * @param fileName
     * @param content
     */
    download(fileName: string, content: string): void;
    _exportPaint(objects: Array<DisplayObject>): void;
    saveDataAsFile(data: any, filename: string): void;
}
