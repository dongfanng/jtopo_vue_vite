import { InputSystem, Link, PointLike } from '@jtopo/core';
import Editor from './Editor';
/**
 * 鼠标拖动时的十字辅助线
 */
export declare class GuidlineManager {
    editor: Editor;
    guildlineW?: Link;
    guildlineS?: Link;
    _disabled: boolean;
    constructor(editor: Editor);
    init(): void;
    disable(): void;
    enable(): void;
    showGuildLine(origin: InputSystem | PointLike): void;
    hideGuidLine(): void;
}