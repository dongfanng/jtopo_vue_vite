import Editor from './Editor';
/**
 * @ignore
 */
export declare class PropertiesPanel {
    editor: Editor;
    gui: any;
    object: any;
    folders: any;
    basic: any;
    style: any;
    dat: any;
    constructor(editor: any, dat: any);
    setCurrentObject(object: any): void;
    showProperty(obj: any): void;
    newFolder(name: any): any;
    getFolder(name: any): any;
    getCtrollerValue(folderName: any, name: any): any;
    getCtroller(folderName: any, name: any): any;
    setFolderValues(basic: any, style: any): void;
    init(): void;
    open(): void;
    close(): void;
    hide(): void;
    show(): void;
}
export { PropertiesPanel as default };
