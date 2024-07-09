/**
 * 编辑事件
 */
export type EditorEventType = "CreateInstance" | "Save" | "Delete";
/**
 * 编辑相关操作触发的事件
 */
declare class EditorEvent {
    type: string;
    constructor(type: EditorEventType);
}
export { EditorEvent as default };
