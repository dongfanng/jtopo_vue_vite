import { LinkTarget } from "../Endpoint";
import { Link } from "../Link";
import { Node } from "../Node";
import { ConnectPosition, PointLike } from "../jtopo_type";
/**
 * 路径连线
 *
 * @since 2.5.0
 */
export declare class PathLink extends Link {
    readonly className: 'PathLink';
    constructor(text?: string, begin?: Node | Link | PointLike, end?: Node | Link | PointLike, beginEndpointName?: ConnectPosition, endEndpointName?: ConnectPosition);
    getPath(): import("../Endpoint").Endpoint[];
    private clearPath;
    setPath(targets: Array<LinkTarget>): void;
}
