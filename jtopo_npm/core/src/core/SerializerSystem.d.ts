import { DisplayObject } from './DisplayObject';
import { SerializedJson } from './jtopo_type';
import Layer from './Layer';
import { Link } from './Link';
import { Node } from './Node';
export type Pojo = {
    [key: string]: any;
};
/**
 * 序列化系统
 *
 * 核心功能：将对象转成json 或者 将json转成对象
 */
export declare class SerializerSystem {
    constructor();
    static numberFixed: number;
    /**
     * 设置序列化时保留的小数点后的位数，如果为null，则不对数字做任何截取
     *
     * 默认保留小数点后6位数字
     */
    setNumberFixed(n: number): void;
    objectsToJSON(objArr: Array<DisplayObject>, imageToBase64?: boolean): SerializedJson;
    jsonToObjects(json: SerializedJson, objMap?: Map<number, DisplayObject>): Array<DisplayObject>;
    copyAndToJSON(displayObjectArr: Array<DisplayObject>): SerializedJson;
    static getEmptyInstance(className: string): any;
    static getProtoDefaultProperties(obj: DisplayObject): {};
    /**
     *  将’组件‘json转成对象(Node或者Link)
     * @param componentJson
     * @returns
     */
    componentToObjects(componentJson: string): Array<Node | Link>;
    /**
     * 对象列表转成json 成为’组件‘
     * @param objArr
     * @returns
     */
    objectsToComponent(objArr: Array<Node | Link>): string;
    /**@ignore */
    fillByJson(layer: Layer, json: string | SerializedJson, waitResourceLoad?: boolean): Promise<unknown>;
    /**@protected */
    getState(obj: DisplayObject): SerializedJson;
    restoreToJson(obj: DisplayObject, json: SerializedJson): SerializedJson;
}
