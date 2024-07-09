export type Observer = Function | {
    next?: (value: any) => any;
    error?: (value: any) => any;
    complete?: () => any;
};
export declare class Observable {
    observers: Array<Observer>;
    constructor();
    publish(value: any): this;
    complete(): this;
    error(msg: any): this;
    subscribe(observer: Observer): this;
    build(fn: Function): Observable;
    filter(predicate: (value: any) => boolean): Observable;
    map(mapFn: (value: any) => any): Observable;
    reduce(reduceFn: Function, initValue?: any): Observable;
    distinct(): Observable;
    debounceTime(time: number): Observable;
    delay(time: number): Observable;
    pairwise(n?: number): Observable;
    bufferCount(n: number, m?: number): Observable;
    unsubscribe(): void;
    static fromEvent(target: any, eventType: string): Observable;
    static of(...values: any[]): Observable;
}
