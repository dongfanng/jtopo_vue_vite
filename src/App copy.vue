<template>
  <div ref="drawContainer" class="drawContainer">
    <n-message-provider>
      <NodeInfo
        v-model:showInfo="state.isShowInfo"
        @showInfo="handleClose"
        @nodeFrom="handleUpdateNode"
        :nodeTarget="state.clickedNode"
        class="nodeInfoBox"
      >
      </NodeInfo>
    </n-message-provider>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, reactive } from "vue";
import { Stage, Layer, Node, Shape } from "@topo/core";
import { Editor, IconsPanel } from "@topo/editor";
import { nodeTempplateData, leftPanelConfig } from "./DataService";
import NodeInfo from "./components/NodeInfo.vue";
import { NMessageProvider } from "naive-ui";

const state = reactive({
  isShowInfo: false,
  clickedNode: null,
});

const drawContainer = ref(null);
let stage = null;
let layer = null;
let editor = null;

onMounted(() => {
  nextTick(() => {
    if (drawContainer.value) {
      initEditor();
    } else {
      console.error("drawContainer is not initialized");
    }
  });
});

function initEditor() {
  stage = new Stage(drawContainer.value);
  layer = new Layer();
  stage.addChild(layer);

  layer.showAxis();
  stage.show();

  editor = new Editor(stage);
  //默认选择编辑
  // stage.setMode("edit");

  // 创建左侧的图标面板，并设置图标数据
  let iconPanel = new IconsPanel(stage);
  iconPanel.setConfig(leftPanelConfig).show();

  // 画布接收到拖拽结束事件时
  editor.on("drop", () => {
    let e = stage.inputSystem.event;
    e.preventDefault();

    // 获取左侧面板拖拽’项‘对应的配置
    const configItem = iconPanel.getDragItem();

    // 根据配置的类名称创建实例
    const instance = editor.create(configItem.className);

    // 根据配置的属性初始化实例
    if (configItem.attr) {
      Object.assign(instance, configItem.attr);
    }

    if (configItem.styles) {
      instance.css(configItem.styles);
    }
  });

  // 鼠标点中的对象在右侧显示属性面板
  stage.inputSystem.on("mousedown", () => {
    const target = stage.inputSystem.target;
    if (target == null) {
      return;
    }
    state.clickedNode = target;
    state.isShowInfo = true;
  });

  // 当鼠标画出的线类型
  editor.LinkClassName = "AutoFoldLink";

  // 当鼠标画出线时
  editor.on("drawLineStart", (event) => {
    let link = event.object;
    link.css({
      lineWidth: 2,
      strokeStyle: "gray",
    });
  });

  // 鼠标划线结束
  editor.on("drawLineEnd", (event) => {
    let link = event.object;
    link.css({
      strokeStyle: "black",
    });
    console.log("划线结束");
  });

  // 左下角显示缩略图
  stage.showOverview({
    left: 0,
    bottom: -1,
  });

  render(nodeTempplateData);

  // 打开最后一次保存
  editor.openLasted();

  // 去掉自带的编辑器右键菜单
  // editor.popupMenu.remove();
}

// 渲染节点数据
function render(data) {
  data.forEach((item, index) => {
    const node = new Node(item.label, index * 100, 0, 64, 64);
    node.setImage(item.image);
    node.css({
      // fillStyle: item.color || "orange",
      font: "bold 12px arial",
    });
    // node.text = "new Node ";
    layer.addChild(node);
  });
}
function handleClose(val) {
  state.isShowInfo = val;
}
function handleUpdateNode(val) {
  let { formData, targetNode } = val;
  targetNode.text = formData.text;
  targetNode.id = formData.id;
}
</script>

<style scoped>
.drawContainer {
  height: calc(100vh - 50px);
  width: 100%;
  border: 1px solid gray;
}
.nodeInfoBox {
  position: absolute;
  right: 20px;
  top: 50px;
  z-index: 999;
  width: 200px;
  height: auto;
}
</style>
