<template>
  <div ref="drawContainer" class="drawContainer">
    <n-message-provider>
      <!-- 用于显示节点信息的容器 -->
      <div class="nodeInfoBox">
        <NodeInfo
          v-for="item in state.activeNodeList"
          :nodeTarget="item"
          @nodeForm="handleUpdateNode"
          @closeInfo="handleActiveClose"
          :key="item.id"
        ></NodeInfo>
      </div>
    </n-message-provider>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, reactive, watch } from "vue";
import { Stage, Layer, Node } from "@topo/core";
import { Editor, IconsPanel } from "@topo/editor";
import { nodeTemplateData, leftPanelConfig } from "./DataService";
import NodeInfo from "./components/NodeInfo.vue";
import { NMessageProvider } from "naive-ui";

// 定义响应式状态
const state = reactive({
  isShowInfo: false, // 是否显示单个信息
  clickedNode: null,
  activeNodeList: [], // 当前选中的node节点
});

const drawContainer = ref(null); // 绘图容器的引用
let stage = null; // 舞台实例
let layer = null; // 图层实例
let editor = null; // 编辑器实例

// 组件挂载时初始化编辑器
onMounted(() => {
  nextTick(() => {
    if (drawContainer.value) {
      initEditor();
    } else {
      console.error("drawContainer is not initialized");
    }
  });
});

// 初始化编辑器函数
function initEditor() {
  stage = new Stage(drawContainer.value); // 创建舞台
  layer = new Layer(); // 创建图层
  stage.addChild(layer); // 将图层添加到舞台

  layer.showAxis(); // 显示坐标轴
  stage.show(); // 显示舞台

  editor = new Editor(stage); // 创建编辑器

  let iconPanel = new IconsPanel(stage); // 创建图标面板
  iconPanel.setConfig(leftPanelConfig).show(); // 配置并显示图标面板

  // 处理拖拽事件
  editor.on("drop", () => {
    let e = stage.inputSystem.event;
    e.preventDefault();

    const configItem = iconPanel.getDragItem();
    const instance = editor.create(configItem.className);

    if (configItem.attr) {
      Object.assign(instance, configItem.attr);
    }

    if (configItem.styles) {
      instance.css(configItem.styles);
    }
  });

  // 处理鼠标按下事件
  stage.inputSystem.on("mousedown", () => {
    const target = stage.inputSystem.target;
    if (target == null) {
      return;
    }
    activeNodeList(target); // 更新选中的节点列表
    state.isShowInfo = true; // 显示节点信息
  });

  editor.LinkClassName = "AutoFoldLink"; // 设置连接线的类名

  // 处理绘制线条开始事件
  editor.on("drawLineStart", (event) => {
    let link = event.object;
    link.css({
      lineWidth: 2,
      strokeStyle: "gray",
    });
  });

  // 处理绘制线条结束事件
  editor.on("drawLineEnd", (event) => {
    let link = event.object;
    link.css({
      strokeStyle: "black",
    });
  });

  // 显示概览
  // stage.showOverview({
  //   left: 0,
  //   bottom: -1,
  // });

  render(nodeTemplateData); // 渲染节点数据

  editor.openLasted(); // 打开最近的编辑器状态
}

// 渲染节点数据函数
function render(data) {
  data.forEach((item, index) => {
    const node = new Node(item.label, index * 100, 0, 64, 64);
    node.setImage(item.image);
    node.css({
      font: "bold 12px Arial",
    });
    layer.addChild(node);
  });
}

// 处理节点信息更新
function handleUpdateNode(val) {
  let { formData, targetNode } = val;
  targetNode.text = formData.text;
  targetNode.id = formData.id;
}

// 更新选中节点列表
function activeNodeList(node) {
  if (state.activeNodeList.some((item) => item.id === node.id)) {
    return;
  } else {
    state.activeNodeList.push(node);
  }
}

// 处理关闭节点信息事件
function handleActiveClose(val) {
  let hasIdx = state.activeNodeList.findIndex((m) => m.id === val.nodeId);
  if (hasIdx === -1) return;
  state.activeNodeList.splice(hasIdx, 1);
}
</script>

<style scoped>
.drawContainer {
  height: calc(100vh - 50px);
  width: 100%;
  /* border: 1px solid gray; */
}
.nodeInfoBox {
  position: absolute;
  right: 20px;
  top: 50px;
  z-index: 999;
  width: 30vh;
  max-height: 70vh;
  overflow-y: auto;
}

/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 0.5vh;
  background-color: transparent;
}

/* 滚动条颜色 */
::-webkit-scrollbar-thumb {
  background-color: rgba(#fff, 0.1);
  border-radius: 0.1vh;
}
</style>
