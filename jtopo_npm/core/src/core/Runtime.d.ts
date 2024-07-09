import Layer from "./Layer";
/**
 * jtopo脚本运行时对象
*/
export declare const Runtime: {
    /**
    * 运行脚本
    */
    execute(script: string, layer: Layer): void;
};
