import Rectangle from "./Rectangle";
import { PointLike } from "./jtopo_type";
/**
 * 节点和连线投射到某个矩形区域内的信息
 */
export type ProjectionInfo = {
    /**
     * 节点的矩形区域信息
     */
    nodeRects: Array<Rectangle>;
    /**
     * 连线的连接点坐标
     */
    linkPoints: Array<Array<PointLike>>;
};
