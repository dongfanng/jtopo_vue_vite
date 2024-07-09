import { Link } from "./Link";
import { Node } from "./Node";
import { ConnectPosition, PointLike } from "./jtopo_type";
/**
 * 管道连线， 与普通连线主要区别在于:
 * 1. 管道通常较宽
 * 2. 有管壁、有内部空芯儿
 * 3. 可以添加接头
 *
[
    {
        begin
        end
        borderWidth:
        lineWith:
        padding:
        fillStyle
    },
    {
        begin
        end
        borderWidth:
        lineWith:
        padding:
        fillStyle
    },
]
 *
 */
export declare class TubeLink extends Link {
    className: 'ArcLink';
    serializers: Array<string>;
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    updatePoints(): PointLike[];
}
export { TubeLink as default };
