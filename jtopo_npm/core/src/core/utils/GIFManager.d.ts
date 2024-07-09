import { EventTarget } from "../EventTarget";
export type GIFInfo = {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    imageData: ImageData;
};
export declare class GIFManagerClass extends EventTarget {
    worker: Worker;
    cache: Map<string, GIFInfo>;
    constructor();
    getFrame(url: string): HTMLCanvasElement;
    load(url: string): void;
    play(url: string): void;
    stop(url: string): void;
    init(): void;
}
export declare const GIFManager: GIFManagerClass;
