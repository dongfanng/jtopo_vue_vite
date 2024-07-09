/**
 * 负责业务数据的加载、格式化、转换等，将数据预处理，让后续的绘制更简单
 * 
 * 不关心如何绘制
 */
class DataService {
    constructor() {
    }

    /**
     * 加载数据
     * @returns 
     */
    loadData() {
        //TODO: 
        // let data = {};
        const data = [
            { label: 'Node A', color: 'orange', image: 'src/assets/img/cloud.png' },
            { label: 'Node B', color: 'blue', image: 'src/assets/img/host.png' },
            { label: 'Node C', color: 'green', image: 'src/assets/img/monitor.png' },
            { label: 'Node D', color: 'red', image: 'src/assets/img/monitor.png' },
            // 可以继续添加更多数据项
        ];

        return data;
    }
}

export const dataService = new DataService();