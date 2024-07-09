import EventTarget from './EventTarget';
import Layer from './Layer';
declare class Renderer extends EventTarget {
    stoped: boolean;
    layer?: Layer;
    constructor();
    dispose(): void;
}
export { Renderer as default };
