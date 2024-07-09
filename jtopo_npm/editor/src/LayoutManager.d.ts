import { DisplayObject } from "@jtopo/core";
import { Editor } from "./Editor";
/**
 * 布局相关
 *
 * 对齐、间隔、层级
 */
export declare class LayoutManager {
    editor: Editor;
    constructor(editor: Editor);
    setZIndex(currObj: DisplayObject, item: '上移一层' | '下移一层' | '移至顶部' | '移至底部'): void;
    /**
     * 等距间隔
     */
    evenSpacing(spacingName: '左右等距' | '上下等距'): void;
    /**
     * 对齐
     * @param alignName
     * @returns
     */
    align(alignName: '左对齐' | '右对齐' | '顶部对齐' | '底部对齐' | '水平中心对齐' | '垂直中心对齐'): void;
    doGridLayout(): void;
}
