import EventTarget from "./EventTarget";
type SuccessCallback = {
    canceled: boolean;
    cacheObj?: Object;
    next?: Function;
} & Function;
/**
 * 资源相关（加载）
 */
declare class ResourceSystem extends EventTarget {
    lastResource: any;
    hasLoaded: any;
    /**@protected */
    imageCache: Map<string, Object>;
    /**@protected */
    callbackCache: Map<string, Array<SuccessCallback>>;
    /**@protected */
    objCache: Map<Object, SuccessCallback>;
    /**@protected */
    allLoadedResolve: any;
    /** 图片加载出错时，是否显示日志 */
    showImgLoadErrorLog: boolean;
    constructor();
    errorLog(msg: any): void;
    /**
     * 等待当前加载队列里的所有资源加载完成
     * @returns
     */
    whenAllLoaded(): Promise<HTMLImageElement | HTMLCanvasElement>;
    /**
     * 当所有图片加载完成
     * @param imgUrls
     * @param showLog
     * @returns
     */
    whenAllImagesLoaded(imgUrls: string[], showLog?: boolean): Promise<unknown[]>;
    /**
     * 缓存可以极大提升图片加载速度
     *
     * 特殊情况下才有可能调用该方法来清空缓存
     */
    clearCache(): void;
    /**@protected */
    removeObject(obj: Object): void;
    /**@protected */
    cancelCallback(fnOrObj: Object): void;
    /**@protected */
    onload(imageOrUrl: string, imageOrCanvas: any): void;
    private addToCallbackList;
    /**@protected */
    loadImageWithObj(obj: Object, imageOrUrl: string, successCallback: SuccessCallback | any): void;
    loadImage(imageOrUrl: string, callback: SuccessCallback | any): void;
}
export declare const ResourceLoader: ResourceSystem;
export { ResourceLoader as default };
