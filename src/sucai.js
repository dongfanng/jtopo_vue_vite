/**  */
// 图片节点
{
    var imgNode = new Node('SVG', 200, -127, 64, 64);
    // png、jpg、jpeg 、bmp、svg、gif、base64字符串 或者一个cavnas
    imgNode.setImage('/statics/logo.svg');
    layer.addChild(imgNode);
}

// 监听鼠标点击事件
inputSystem.on('mousedown', (event) => {
    const target = inputSystem.target;
    if (target && target instanceof Node) {
        target.draggable = true; // 设置节点可拖拽
        target.dragData = {
            startX: event.x,
            startY: event.y,
            startNodeX: target.x,
            startNodeY: target.y
        };
    }
});

// 监听鼠标移动事件
inputSystem.on('mousemove', (event) => {
    const target = inputSystem.target;
    // 打印目标节点信息，便于调试
    console.log('目标节点:', target);
    console.log('鼠标位置:', event.x, event.y); // 打印鼠标相对于页面的位置信息

    // 检查目标是否存在并且可拖拽
    if (target && target.draggable) {
        const dragData = target.dragData;
        // 计算鼠标相对于起始位置的偏移量
        const offsetX = event.x - dragData.startX;
        const offsetY = event.y - dragData.startY;
        // 设置目标节点的新坐标
        target.x = dragData.startNodeX + offsetX;
        target.y = dragData.startNodeY + offsetY;
    }
});


// 监听鼠标释放事件
inputSystem.on('mouseup', () => {
    const target = inputSystem.target;
    if (target && target.draggable) {
        target.draggable = false; // 停止拖拽
        delete target.dragData;
    }
});


