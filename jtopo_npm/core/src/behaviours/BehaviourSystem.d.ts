import DisplayObject from "../core/DisplayObject";
import Stage from "../core/Stage";
/**
 * 行为控制系统（类似自定义脚本）
```js

    const behaviourSystem = stage.behaviourSystem;
    
    // 定义一个可复用的行为 : '附着右上角' (将节点附着到另外一个节点的右上角)
    behaviourSystem.defBehaviour('附着右上角', {
        // 初始化仅第一次执行
        first(node) {
            node.text = '';
        },
        // 每一帧绘制前执行
        update(node, group) {
            node.x = group.right;
            node.y = group.top;
        }
    });

    // 使用前面定义的行为 '附着右上角'
    let group = new Node('');
    let node = new Node('');

    // 1. 准备上下文
    let context = group;

    // 2. 将行为和上下文加到一个node对象上
    behaviourSystem.addBehaviour(node, '附着右上角', context);
```
 */
export declare class BehaviourSystem {
    stage: Stage;
    map: Map<DisplayObject, Behaviour[]>;
    argMap: WeakMap<any, any[]>;
    behaviourMap: Map<string, Behaviour>;
    stoped: boolean;
    constructor(stage: Stage);
    tick(timer: number): void;
    /**
     * 定义行为脚本
     * @param name 名称（保证唯一）
     * @param body 行为体（含：first或者update方法)
```js
   defBehaviour('行为1', {
        first: function(obj, option){
            console.log('第一次附加到对象上时执行');
        },
        update: function(obj, option){
            console.log('每一帧执行');
        }
   });
```
     */
    defBehaviour(name: string, body: Object): Behaviour;
    /** 将一个行为脚本注册到系统 */
    regBehaviour(behaviour: Behaviour): void;
    /** 向指定对象添加行为脚本
     * @param obj
     * @param 行为脚本名称
     * @param option 运行时依赖的参数
     */
    addBehaviour(obj: DisplayObject, behaviourName: string, option?: any): void;
    /** 移除某个对象上的行为脚本 */
    removeBehaviour(obj: DisplayObject, behaviourName: string): void;
    executeBehaviours(obj: DisplayObject, behaviourType: 'update'): boolean;
}
/**
 * 渲染行为控制
```
    可以在每一帧画面绘制前做一些计算和处理
```
 */
export declare class Behaviour {
    name: string;
    constructor(name: string);
    /**
     * 加入到对象时执行一次，仅执行一次。
     */
    first(obj: DisplayObject, option: any): void;
    /**
     * 每一帧调用。
     *
     * 对象不可见或者已经超出视口（画布）仍然会调用该方法。
     *
     * 如果父对象在renderAfter()返回false，该方法将不会被调用。
     *
     * 如果返回false，对象不会被渲染出来，
     */
    update(obj: DisplayObject, option: any): any;
    static fromJSON(json: any): Behaviour;
    toJSON(): {
        name: string;
        first: string;
        update: string;
    };
}
