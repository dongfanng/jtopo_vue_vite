export declare class XMLShapeParser {
    documentElement: Element;
    constructor(xmlText: string);
    textToElement(text: string): HTMLElement;
    toJson(): ShapeCategoryJson;
    private domChildrenToJson;
    private domToJson;
    private parse;
    private unitCmd;
}
export type ShapeJson = {
    name: string;
    width: number;
    height: number;
    connections?: any[];
    background?: any[];
    foreground?: any[];
};
export type ShapeCategoryJson = {
    category: string;
    shapes: ShapeJson[];
};
export type DrawCmd = {
    T: string;
    m: any[];
};
