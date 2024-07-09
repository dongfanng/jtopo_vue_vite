export interface Interactable {
    mousedownHandler(event: any): any;
    mouseupHandler(event: any): any;
    mouseenterHandler(event: any): any;
    mouseoutHandler(event: any): any;
    dragHandler(event: any): any;
    dragEndHandler(event: any): any;
    clickHandler(event: any): any;
    dblclickHandler(event: any): any;
    mousemoveHandler(event: any): any;
    mouseoverHandler(event: any): any;
}
export interface Container {
    getChildren(): any;
    removeAllChild(): any;
    addChild(child: any): any;
    removeChild(child: any): any;
    hasChild(child: any): any;
}
export interface Visbility {
    show(): any;
    hide(): any;
    isVisible(): boolean;
}
export interface Transformable {
    translate(x: number, y: number): any;
    scale(x: any, y: any): any;
    rotate(angle: any): any;
    transform(a: any, b: any, c: any, d: any, e: any, f: any): any;
}
export interface Linkable {
    getLinks(): Array<any>;
    getInLinks(): Array<any>;
    getOutLinks(): Array<any>;
}
