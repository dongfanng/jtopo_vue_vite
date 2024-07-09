export declare class EventBase {
}
export declare class NodeEvent {
    constructor();
}
export declare class LinkEvent {
    constructor();
}
export declare class LayerEvent {
}
export type StageEventType = "zoom";
export declare class StageEvent {
    type: StageEventType;
    constructor(type: StageEventType);
}
export type CameraEventType = 'zoom' | 'zoomOut' | 'zoomIn' | "lookAt" | 'cancelZoom';
export declare class CameraEvent {
    type: CameraEventType;
    constructor(type: CameraEventType);
}
