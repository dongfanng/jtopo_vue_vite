/**
 * create: 创建Node或Link
 */
export type EditEventName = 'save' | 'delete' | 'copy' | 'cut' | 'paste' | 'resize' | 'rotate' | 'save' | 'open' | 'create' | 'lineDrawn' | 'lineDrawingFinished' | 'drawLineStart' | 'drawLineEnd';
export declare class EditEvent {
    type: EditEventName;
    /**
     * 事件关联的对象
     */
    object: any;
    details: any;
    constructor(type: EditEventName);
}
