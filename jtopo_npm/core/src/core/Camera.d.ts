import { DisplayObject } from "./DisplayObject";
import { Stage } from "./Stage";
import { PointLike } from "./jtopo_type";
import EventTarget from './EventTarget';
import Layer from "./Layer";
/**
 * 相机对象，更直观简单的方式控制画面的显示、缩放。
 *
 * @since 2.5.0
 */
export declare class Camera extends EventTarget {
    x: number;
    y: number;
    private scale;
    private stage;
    private dirty;
    private transform;
    /**
     * 缩放最大极限, 默认最大能放大10倍
```
    //例如：限制最大能缩放2倍
    camera.zoomMaxLimit = 2;
```
     */
    zoomMaxLimit: number;
    /**
     * 缩放最小极限，默认最小能缩放到原来的十分之一
    ```
    //例如：限制最小能缩放到原来的一半
    camera.zoomMminLimit = 0.5;
    ```
     */
    zoomMinLimit: number;
    constructor(stage: Stage);
    /**
     * 相机的中心看向某个坐标 (世界坐标系)
     * @param xOrPointLike
     * @param y
     */
    lookAt(xOrPointLike: number | PointLike, y?: number): void;
    /**
     * 缩小到原来尺寸的80%
     */
    zoomOut(s?: number): this;
    /**
     * 放大到原来尺寸的125%
     */
    zoomIn(s?: number): this;
    /**
      * 指定坐标为中心，进行缩放
      * <p>会抛出zoom事件, 可捕获,如：</p>
 ```js
      camera.on('zoom', (event)=>{
         event.preventDefault(); // 阻止缩放
      })
 ```
     * @param s 缩放系数
      * @param cx 缩放中心的x坐标
      * @param cy 缩放中心的y坐标
      */
    zoomBy(s: number, cx?: number, cy?: number): void;
    zoom(s: number): void;
    /**
     * 取消所有缩放
     */
    cancelZoom(): void;
    zoomLayer(layer: Layer, s: number, cx?: number, cy?: number): void;
    private translateWith;
    /**@protected */
    _dragWith(dx: number, dy: number): void;
    /**
     * 聚焦在指定对象（及子节点）上，其他对象不可见
     * @param object
     */
    targetOnly(object: DisplayObject | null): void;
    private getTransform;
    private isDirty;
    private clearDirty;
}
