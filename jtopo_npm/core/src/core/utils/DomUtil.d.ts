/**@ignore */
export declare class DomUtil {
    static addEventListener(elem: any, type: any, listener: any): void;
    static getOffsetPosition(elem: any): {
        left: number;
        top: number;
    };
    static createVideo(videoSrc: string, callback: any): HTMLVideoElement;
    static fullWindow(domObj: HTMLElement): void;
    static fullScreen(element: HTMLElement): void;
    static getXYInDom(canvas: any, event: any): {
        x: number;
        y: number;
    };
    static isMobileDevice: boolean;
}
export { DomUtil as default };
