export declare const ColorKeywords: {
    aliceblue: string;
    antiquewhite: string;
    aqua: string;
    aquamarine: string;
    azure: string;
    beige: string;
    bisque: string;
    black: string;
    blanchedalmond: string;
    blue: string;
    blueviolet: string;
    brown: string;
    burlywood: string;
    cadetblue: string;
    chartreuse: string;
    chocolate: string;
    coral: string;
    cornflowerblue: string;
    cornsilk: string;
    crimson: string;
    cyan: string;
    darkblue: string;
    darkcyan: string;
    darkgoldenrod: string;
    darkgray: string;
    darkgreen: string;
    darkgrey: string;
    darkkhaki: string;
    darkmagenta: string;
    darkolivegreen: string;
    darkorange: string;
    darkorchid: string;
    darkred: string;
    darksalmon: string;
    darkseagreen: string;
    darkslateblue: string;
    darkslategray: string;
    darkslategrey: string;
    darkturquoise: string;
    darkviolet: string;
    deeppink: string;
    deepskyblue: string;
    dimgray: string;
    dimgrey: string;
    dodgerblue: string;
    firebrick: string;
    floralwhite: string;
    forestgreen: string;
    fuchsia: string;
    gainsboro: string;
    ghostwhite: string;
    gold: string;
    goldenrod: string;
    gray: string;
    green: string;
    greenyellow: string;
    grey: string;
    honeydew: string;
    hotpink: string;
    indianred: string;
    indigo: string;
    ivory: string;
    khaki: string;
    lavender: string;
    lavenderblush: string;
    lawngreen: string;
    lemonchiffon: string;
    lightblue: string;
    lightcoral: string;
    lightcyan: string;
    lightgoldenrodyellow: string;
    lightgray: string;
    lightgreen: string;
    lightgrey: string;
    lightpink: string;
    lightsalmon: string;
    lightseagreen: string;
    lightskyblue: string;
    lightslategray: string;
    lightslategrey: string;
    lightsteelblue: string;
    lightyellow: string;
    lime: string;
    limegreen: string;
    linen: string;
    magenta: string;
    maroon: string;
    mediumaquamarine: string;
    mediumblue: string;
    mediumorchid: string;
    mediumpurple: string;
    mediumseagreen: string;
    mediumslateblue: string;
    mediumspringgreen: string;
    mediumturquoise: string;
    mediumvioletred: string;
    midnightblue: string;
    mintcream: string;
    mistyrose: string;
    moccasin: string;
    navajowhite: string;
    navy: string;
    oldlace: string;
    olive: string;
    olivedrab: string;
    orange: string;
    orangered: string;
    orchid: string;
    palegoldenrod: string;
    palegreen: string;
    paleturquoise: string;
    palevioletred: string;
    papayawhip: string;
    peachpuff: string;
    peru: string;
    pink: string;
    plum: string;
    powderblue: string;
    purple: string;
    red: string;
    rosybrown: string;
    royalblue: string;
    saddlebrown: string;
    salmon: string;
    sandybrown: string;
    seagreen: string;
    seashell: string;
    sienna: string;
    silver: string;
    skyblue: string;
    slateblue: string;
    slategray: string;
    slategrey: string;
    snow: string;
    springgreen: string;
    steelblue: string;
    tan: string;
    teal: string;
    thistle: string;
    tomato: string;
    turquoise: string;
    violet: string;
    wheat: string;
    white: string;
    whitesmoke: string;
    yellow: string;
    yellowgreen: string;
};
export declare class Color {
    r: number;
    g: number;
    b: number;
    o: number;
    constructor(color?: any);
    set(value: any): this;
    setHex(hex: any): this;
    setRGB(r: any, g: any, b: any): this;
    setHSL(h: any, s: any, l: any): this;
    setStyle(style: any): this;
    copy(color: any): this;
    copyGammaToLinear(color: any): this;
    copyLinearToGamma(color: any): this;
    convertGammaToLinear(): this;
    convertLinearToGamma(): this;
    getHex(): number;
    getHexString(): string;
    getHSL(optionalTarget?: any): any;
    getStyle(opacity: any): string;
    offsetHSL(h: any, s: any, l: any): this;
    add(color: any): this;
    addColors(color1: any, color2: any): this;
    addScalar(s: any): this;
    multiply(color: any): this;
    multiplyScalar(s: any): this;
    lerp(color: any, alpha: any): this;
    equals(c: any): boolean;
    fromArray(array: any): this;
    toArray(): number[];
    clone(): Color;
}