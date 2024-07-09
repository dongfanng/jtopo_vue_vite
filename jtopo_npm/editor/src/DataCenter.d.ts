declare const DataCenter: {
    getItem: (key: any) => string;
    setItem: (key: any, value: any) => void;
    saveWithVersion(key: any, value: any): void;
    getAllVersions(key: any): string[];
    getLastVersion(key: any, n: any): any;
};
export { DataCenter as default };
