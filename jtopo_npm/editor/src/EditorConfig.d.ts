/**
 * 编辑器配置
 */
export declare const EditorConfig: {
    data: {
        localLastDocName: string;
    };
    anchorPoint: {
        size: number;
        style: {
            strokeStyle: string;
            fillStyle: string;
            lineWidth: number;
        };
        activeStyle: {
            fillStyle: string;
        };
        unActiveStyle: {
            fillStyle: string;
        };
        drawStartMinDistance: number;
        drawStartDelay: number;
    };
    anchorBox: {
        anchorDist: number;
        nodeDist: number;
    };
    nodeResizePoint: {
        width: number;
        height: number;
        style: {
            border: string;
            backgroundColor: string;
        };
    };
    nodeRotatePoint: {
        width: number;
        height: number;
        style: {
            lineWidth: number;
            strokeStyle: string;
            fillStyle: string;
        };
        rotateLineStyle: {
            strokeStyle: string;
        };
        rotateLineLength: number;
    };
    guildLine: {
        styleW: {
            strokeStyle: string;
            lineDash: number[];
        };
        styleS: {
            strokeStyle: string;
            lineDash: number[];
        };
    };
    linkCtrlPoint: {
        size: number;
        style: {
            lineWidth: number;
            strokeStyle: string;
            fillStyle: string;
        };
        activeStyle: {
            strokeStyle: string;
            fillStyle: string;
        };
        unactiveStyle: {
            strokeStyle: string;
            fillStyle: string;
        };
        adjustStyle: {
            strokeStyle: string;
            fillStyle: string;
        };
        ctrlLinkStyle: {
            lineDash: number[];
        };
    };
    dropBox: {
        style: {
            border: string;
            lineDash: number[];
        };
    };
    align: {
        minDistance: number;
        alignLineStyle: {
            strokeStyle: string;
            lineDash: number[];
        };
    };
    operationTip: {
        enable: boolean;
    };
};
