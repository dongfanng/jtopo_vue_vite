import DisplayObject from "./DisplayObject";
import Stage from "./Stage";
/**@ignore */
export declare class LocalView {
    stage: Stage;
    object: DisplayObject;
    hideList: Array<DisplayObject>;
    mouseEnabledBak?: boolean;
    mode: string;
    constructor(stage: Stage);
    enter(object: DisplayObject): void;
    quit(): void;
    getObject(): DisplayObject;
    getMouseXY(): any;
}
