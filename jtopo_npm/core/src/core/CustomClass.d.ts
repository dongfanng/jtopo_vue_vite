/**
 * 注册自定义的类（自定义的类需要序列化时）
 *
 * @deprecated 已过时，推荐使用组合+脚本的形式自定义类
 */
export declare function regClass(name: any, clazz: any, serializers: Array<string>): void;
/**
 *
 * @deprecated
 * @param name
 * @returns
 */
export declare function getClass(name: string): any;
export declare function newInstance(className?: string, init?: any): any;
