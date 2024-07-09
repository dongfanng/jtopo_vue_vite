import { Layer } from "./Layer";
import Stage from "./Stage";
/**@ignore */
export declare class RenderSystem {
    /**@protected */
    requestTimer: number;
    stage: Stage;
    /**@protected */
    readonly timeline: {
        currentTime: number;
    };
    constructor(stage: Stage);
    _renderLayerBefore(layer: Layer): void;
    private isOutOfViewPort;
    private isMouseInObjectAABB;
    _tickLayer(layer: Layer, time: number): void;
    pause(): void;
    start(): void;
}
