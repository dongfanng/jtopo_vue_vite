import { DisplayObject } from './DisplayObject';
import { Style } from './Style';
import { SerializedJson, SerializedDisplayObject } from './jtopo_type';
import { Shape } from './geom/Shape';
export type ObjectIndexInfo = {
    objects: Array<DisplayObject>;
    objIndexMap: Map<DisplayObject, number>;
    styleIndexMap: Map<Style, number>;
    styles: Array<Style>;
    resourcesIndexMap: Map<string, Resource>;
    resources: Array<Resource>;
    shapeIndexMap: Map<Shape, number>;
    shapes: Array<Shape>;
    indexImage: Function;
};
type Resource = {
    type: 'img';
    src: string;
};
export declare function displayObjectsToJSON(displayObjectArr: Array<DisplayObject>, imgToBase64?: boolean): SerializedJson;
export declare function uniqueStyles(json: SerializedJson): void;
export declare function serializersToPojo(object: DisplayObject | Style, serializers: Array<string>, allwaysSerializers?: Array<string>): SerializedDisplayObject;
export {};
