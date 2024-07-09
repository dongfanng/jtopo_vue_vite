import { Stage, Layer, Node, Link, VERSION } from '@jtopo/core';
import { dataService } from './DataService';

// 初始化画布
function init(divObj) {
    const stage = new Stage(divObj);
    const layer = new Layer('default');

    console.log(VERSION);

    layer.showAxis();
    stage.addChild(layer);
    stage.show();

    initEvent(stage, layer);

    // 加载数据并绘制
    const data = dataService.loadData();
    render(layer, data);
}

// 事件处理初始化
function initEvent(stage, layer) {
    // 获取inputSystem对象
    const inputSystem = stage.inputSystem;
    let selectedNode = null;

    // 监听鼠标点击事件
    inputSystem.on('click', () => {
        const target = inputSystem.target;
        handleNodeClick(target, layer, selectedNode, (node) => selectedNode = node);
        console.log('target', target);
    });

    // 监听鼠标释放事件
    inputSystem.on('mouseup', () => {
        const target = inputSystem.target;

    });
}

// 处理节点点击事件
function handleNodeClick(target, layer, selectedNode, setSelectedNode) {
    if (selectedNode) {
        if (target instanceof Node) {
            const link = new Link('Link', selectedNode, target, 'rm', 'nearest');
            layer.addChild(link);
            console.log('创建了一个连线', link);
        } else {
            console.log('取消选中节点', selectedNode.text);
        }
        setSelectedNode(null);
    } else {
        if (target instanceof Node) {
            setSelectedNode(target);
            console.log('选中了一个节点', target.text);
        }
    }
}

// 根据传入的业务数据制图
function render(layer, data) {
    // 遍历数据列表，为每个数据项创建节点
    data.forEach((item, index) => {
        const node = new Node(item.label, index * 100, 0, 40, 40);
        node.setImage(item.image);
        // 设置节点样式
        node.css({
            fillStyle: item.color || 'orange', // 可以根据数据项设置不同的颜色
            font: 'bold 12px arial',
        });
        // 添加节点到图层
        layer.addChild(node);
        // 监听节点的 mousedown 事件
        node.on('mousedown', () => {
            node.text = 'mousedown';
        });
    });
}

// 导出初始化函数
export { init, initEvent, handleNodeClick, render };
