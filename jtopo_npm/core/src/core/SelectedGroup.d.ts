import EventTarget from './EventTarget';
import InputSystem from './InputSystem';
import { DisplayObject } from './DisplayObject';
/**
 * 当前选中的对象组(由鼠标点击 或者 框选)
 *
```js
// 当前被选中的对象集合,有Node、Link
let objects = stage.selectedGroup.objects;

```
 */
export declare class SelectedGroup extends EventTarget {
    /**
     * 当前被选中的对象集合,有Node、Link
     */
    objects: any[];
    private noChildrensObjects;
    isDraging: boolean;
    constructor();
    isEmpty(): boolean;
    mouseoutHandler(inputSystem: InputSystem): void;
    dragHandler(inputSystem: InputSystem): void;
    dragEndHandler(inputSystem: InputSystem): void;
    getNoChildrensObjects(): Array<DisplayObject>;
    addAll(childs: any): this;
    add(child: any): this;
    remove(child: any): this;
    removeAll(): this;
    has(child: any): boolean;
}
export { SelectedGroup as default };
