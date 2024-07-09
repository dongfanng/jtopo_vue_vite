import Editor from './Editor';
export declare const DropToKey = "Shift";
export declare class KeyManager {
    editor: Editor;
    constructor(editor: Editor);
    init(): void;
}
