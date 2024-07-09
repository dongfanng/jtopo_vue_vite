import Layer from './Layer';
import { CanvasRendererBase } from './CanvasRendererBase';
/**@ignore */
declare class CanvasRenderer extends CanvasRendererBase {
    constructor(layer?: Layer);
    renderLayer(layer: Layer): void;
    paintLayer(layer: Layer, isOverview: boolean): Layer;
    private paintAABB;
    private paintAxis;
}
export { CanvasRenderer as default };
