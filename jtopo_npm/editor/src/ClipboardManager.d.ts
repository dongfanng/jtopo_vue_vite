import Editor from './Editor';
import ClipBoard from './ClipBoard';
/**
 * 剪切板管理类
 */
export declare class ClipboardManager {
    editor: Editor;
    clipboard: ClipBoard;
    cssClipBoard: ClipBoard;
    constructor(editor: Editor);
    copyHandler(): void;
    cutHandler(): void;
    pasteHandler(): void;
    styleCopyHandler(): void;
    stylePasteHandler(): void;
    private copySetStyle;
}
