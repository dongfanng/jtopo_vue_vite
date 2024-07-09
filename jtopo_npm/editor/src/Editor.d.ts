import { Layer, Stage, EventTarget, HandlerLayer, SelectedGroup, Keyboard, DisplayObject, InputTextfield, PopupMenu, Link, InputEvent, Tooltip, Node } from '@jtopo/core';
import NodeCtrlBox from './NodeCtrlBox';
import LinkCtrlBox from './LinkCtrlBox';
import AnchorBox from './AnchorBox';
import { RedoUndoSystem } from './RedoUndoSystem';
import { KeyManager } from './KeyManager';
import { GuidlineManager } from './GuidlineManager';
import { ClipboardManager } from './ClipboardManager';
import { DropToBox } from './DropToBox';
import { EditorEventManager } from './EditorEventManager';
import { LayoutManager } from './LayoutManager';
import { InstanceManager } from './InstanceManager';
import { AlignManager } from './AlignManager';
/**
 * 编辑器
 * @ignore
 */
export declare class Editor extends EventTarget {
    /**
     * Stage对象
     */
    stage: Stage;
    handlerLayer: HandlerLayer;
    /**
     * 当前Layer（目前只支持一个Layer）
     */
    currentLayer: Layer;
    /**
     * 快捷键配置
     */
    KeysConfig: {
        CtrlOrCmd: string;
        CreateGroup: string;
        DropTo_leader: string;
        Delete: string[];
        Select_all: string[];
        Select_invert: string[];
        Cut: string[];
        Copy: string[];
        Paste: string[];
        Save: string[];
        Open: string[];
        Undo: string[];
        Redo: string[];
        Copy_style: string[];
        paste_Style: string[];
        Move_up: string[];
        Move_down: string[];
        Move_left: string[];
        Move_right: string[];
        Layout_tree: string[];
        Layout_grid: string[];
        LocalView: string[];
        ResizeKeepAspectRatio: string;
        DrawLine: string[];
        /**
         * 编辑器
         * @ignore
         */
        Cancel: string[];
        DiableNodeAlign: string;
    };
    EditorConfig: {
        data: {
            localLastDocName: string;
        };
        anchorPoint: {
            size: number;
            style: {
                strokeStyle: string;
                fillStyle: string;
                lineWidth: number;
            };
            activeStyle: {
                fillStyle: string;
            };
            unActiveStyle: {
                fillStyle: string;
            };
            drawStartMinDistance: number;
            drawStartDelay: number;
        };
        anchorBox: {
            anchorDist: number;
            nodeDist: number;
        };
        nodeResizePoint: {
            width: number;
            height: number;
            style: {
                border: string;
                backgroundColor: string;
            };
        };
        nodeRotatePoint: {
            width: number;
            height: number;
            style: {
                lineWidth: number;
                strokeStyle: string;
                fillStyle: string;
            };
            rotateLineStyle: {
                strokeStyle: string;
            };
            rotateLineLength: number;
        };
        guildLine: {
            styleW: {
                strokeStyle: string;
                lineDash: number[];
            };
            styleS: {
                strokeStyle: string;
                lineDash: number[];
            };
        };
        linkCtrlPoint: {
            size: number;
            style: {
                lineWidth: number;
                strokeStyle: string;
                fillStyle: string;
            };
            activeStyle: {
                strokeStyle: string; /**
                 * 弹出菜单对象
                 */
                fillStyle: string;
            };
            /**
             * 当前鼠标操作的一个对象
             */
            unactiveStyle: {
                strokeStyle: string;
                fillStyle: string;
            };
            adjustStyle: {
                strokeStyle: string;
                fillStyle: string;
            };
            ctrlLinkStyle: {
                lineDash: number[];
            };
        };
        dropBox: {
            style: {
                border: string;
                lineDash: number[];
            };
        };
        align: {
            minDistance: number;
            alignLineStyle: {
                strokeStyle: string;
                lineDash: number[];
            };
        };
        operationTip: {
            enable: boolean;
        };
    };
    /**
     * 当前选中的对象组
     */
    selectedGroup: SelectedGroup;
    keyboard: Keyboard;
    nodeCtrlBox: NodeCtrlBox;
    linkCtrlBox: LinkCtrlBox;
    anchorBox: AnchorBox;
    dropToBox: DropToBox;
    editorEventManager: EditorEventManager;
    keyManager: KeyManager;
    clipboardManager: ClipboardManager;
    layoutManager: LayoutManager;
    instanceManager: InstanceManager;
    /**
     * 弹出菜单对象
     */
    popupMenu: PopupMenu;
    /**
     * 当前鼠标操作的一个对象
     */
    pickedObject?: DisplayObject;
    mouseOverTarget?: DisplayObject;
    controlTarget?: any;
    inputTextfield: InputTextfield;
    redoUndoSys: RedoUndoSystem;
    guidlineManager: GuidlineManager;
    alignManager: AlignManager;
    opTooltip: Tooltip;
    /**
     * 当前鼠标划线的类名称, 默认：AutoFoldLink ，可以修改成其它Link的类名称如: "Link"、"FoldLink"
     */
    LinkClassName: string;
    recordName?: string;
    lastLayerState?: any;
    newLinkProperties: any;
    static KeysConfig: {
        CtrlOrCmd: string;
        CreateGroup: string;
        DropTo_leader: string;
        Delete: string[];
        Select_all: string[];
        Select_invert: string[];
        Cut: string[];
        Copy: string[];
        Paste: string[];
        Save: string[];
        Open: string[];
        Undo: string[];
        Redo: string[];
        Copy_style: string[];
        paste_Style: string[];
        Move_up: string[];
        Move_down: string[];
        Move_left: string[];
        Move_right: string[];
        Layout_tree: string[];
        Layout_grid: string[];
        LocalView: string[];
        ResizeKeepAspectRatio: string;
        DrawLine: string[];
        /**
         * 编辑器
         * @ignore
         */
        Cancel: string[];
        DiableNodeAlign: string;
    };
    DataCenter: {
        getItem: (key: any) => string;
        setItem: (key: any, value: any) => void;
        saveWithVersion(key: any, value: any): void;
        getAllVersions(key: any): string[];
        getLastVersion(key: any, n: any): any;
    };
    rulerW?: Link;
    rulerS?: Link;
    guildAxis?: Node;
    imageToBase64: boolean;
    /**
     * 当鼠标画出线时的回调处理函数
     *
     *
     * 已过时， 请使用事件监听的方式来替代该回调, 例如：
    ```js
    // 开始划线
    editor.on('drawLineStart', (event)=> {
        let link = event.object;
        console.log(link);
    });

    // 结束划线
    editor.on('drawLineEnd', (event)=> {
        let link = event.object;
        console.log(link);
    });
    ```
    *
    * @deprecated
    * @param link
    */
    onLinkCreate: null;
    /**
     *
     * @param {Stage} stage
     */
    constructor(stage: Stage);
    /**
     * 设置鼠标划线的类名称, 默认：AutoFoldLink ，可以修改成其它Link的类名称如: "Link"、"FoldLink"
     */
    setLinkClassName(className: string): void;
    /**
     * 获取当前Layer
     * @returns {Layer}
     */
    getCurrentLayer(): Layer;
    defineKeys(config: any): void;
    /**
     * 画布中间显示提示信息-很短暂停留后消失
     */
    showOpTooltip(msg: string): void;
    /**
     * 保存到浏览器缓存
     */
    saveHandler(event: any, imageToBase64?: boolean): void;
    /**
     * 从浏览器缓存中打开最后一次的保存
     */
    openLasted(): Promise<import("@jtopo/core").SerializedJson>;
    /**@protected */
    dblclickHandler(event: any): void;
    /**@protected */
    mousewheelHandler(event: any): void;
    /**@protected */
    mousedownHandler(event: any): void;
    /**@protected */
    mouseupHandler(event: any): void;
    /**@protected */
    mousedragHandler(event: any): void;
    /**@protected */
    mousemoveHandler(event: any): void;
    /**@protected */
    mouseenterHandler(event: any): void;
    /**@protected */
    mouseoutHandler(event: any): void;
    /**@protected */
    selectedGroupDragHandler(event: InputEvent, objects: any): void;
    /**@protected */
    selectedGroupDragEndHandler(event: InputEvent, objects: any): void;
    /**@protected */
    recordInterrupt(): void;
    /**@protected */
    record(recordName: string): void;
    /**@protected */
    recordEnd(recordName: string): void;
    /**
     * @deprecated
     */
    newLink(text: any, beginObject: any, mousePoint: any, beginEndpoint: any): any;
    /**
     * 请求刷新
     */
    update(): void;
    /**
     * 生成json字符串
     * @protected
     * @param imageToBase64 图片是否转成Base64嵌入到到json里
     */
    toJson(imageToBase64?: boolean): string;
    /**
     * 打开一个json文档
     */
    openJson(json: string): void;
    /**@protected */
    showTip(msg1: any, msg2?: string): void;
    /**
     * 根据data生成一个图元实例
     * @param data
     */
    create(className: string): any;
    clearCtrlBoxs(): void;
    toogleLocalView(): void;
    /**
     * 模拟一次按键,
     例如:
```
    editor.sendKey('Control+a'); // windows
    editor.sendKey('Meta+a'); // macos
    
    editor.sendKey('delete');

    editor.sendKey('Control+z'); // windows
    editor.sendKey('Meta+z'); // macos 撤销
```
     */
    sendKey(keyStr: string, event?: any): void;
    onEsc(): void;
}
export { Editor as default };
