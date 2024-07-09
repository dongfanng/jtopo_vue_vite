import TortoisePainter from './TortoisePainter';
/**@ignore */
export declare class TopoPainter extends TortoisePainter {
    constructor();
    applyTo(target: any): this;
    toFunction(): Function;
    toPath2D(): any;
    toCmd(contextName?: any): string;
    toCmds(contextName: any): any[];
    circle(radius: any): this;
    style(name: any, value: any): this;
    text(text: any): this;
    lineTo(p: any): this;
    beginPath(): this;
    stroke(): this;
    fill(): this;
    save(): this;
    restore(): this;
}
