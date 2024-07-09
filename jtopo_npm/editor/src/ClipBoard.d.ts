/**
 * 剪切板对象
 */
declare class ClipBoard {
    type: 'cut' | 'copy';
    take: number;
    source: any;
    constructor();
    copyPut(object: any): void;
    cutPut(object: any): void;
    takeSource(): any;
    isFirstCutPaste(): boolean;
}
export { ClipBoard as default };
