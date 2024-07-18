<template>
  <div ref="drawContainer" class="drawContainer">
    <n-message-provider>
      <!-- 节点信息显示模块 -->
      <NodeInfo :showInfo="state.isShowInfo" @update:showInfo="handleClose" @nodeForm="handleUpdateNode"
        :nodeTarget="state.clickedNode" class="nodeInfoBox">
      </NodeInfo>
      <!-- 拖拽模块 -->
      <ComponentBox class="componentBox" @draggedNode="handleDragedNode"></ComponentBox>
    </n-message-provider>
  </div>
</template>

<script setup>
import NodeInfo from "./components/NodeInfo.vue";
import ComponentBox from "./components/ComponentBox.vue";
import { onMounted, ref, reactive, toRaw } from "vue";
import { Stage, Layer, Node } from "@topo/core";
import { Editor } from "@topo/editor";
import { nodeTemplateData } from "./DataService"; // 初始化节点信息
import { NMessageProvider } from "naive-ui";

const state = reactive({
  isShowInfo: false, //节点信息面板
  clickedNode: null,  //当前选中选中节点或连线
  dragItem: {}, //拖拽的新增节点信息
});

const drawContainer = ref(null);
let stage = null; //公共画布
let layer = null; //公共图层
let editor = null; //编辑器

onMounted(() => {
  //初始化编辑器
  initEditor();
  // 添加初始化节点
  initNodeAdd(nodeTemplateData);
});

/**
 * 初始化编辑器
 */
function initEditor() {
  stage = new Stage(drawContainer.value);
  layer = new Layer();
  stage.addChild(layer);
  layer.showAxis();
  stage.show();

  editor = new Editor(stage);
  editor.LinkClassName = "AutoFoldLink"; // 设置连线样式


  // 画布接收到拖拽结束事件时
  editor.on("drop", (e) => {
    e.preventDefault();

    //  获取原始对象
    const rawNode = toRaw(state.dragItem);
    console.log("rawNode", rawNode);
    // 获取左侧面板拖拽’项‘对应的配置
    // const configItem = iconPanel.getDragItem();
    const configItem = rawNode;
    // const configItem = state.dragItem;

    console.log("configItem", configItem); //Object{name:"host",arrt:{...},styles:{...}}

    // 根据配置的类名称创建实例
    const instance = editor.create(configItem.className);

    // 根据配置的属性初始化实例
    // 添加节点属性
    if (configItem.attr) {
      Object.assign(instance, configItem.attr);
    }
    // 添加节点样式
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

  // 鼠标画出的连接线类型
  // editor.LinkClassName = "AutoFoldLink"; //移到函数外面会报错 稍后修改

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

  //默认选择编辑
  // stage.setMode("edit");

  // 去掉自带的编辑器右键菜单
  // editor.popupMenu.remove();
}

// 渲染初始化节点数据
function initNodeAdd(data) {
  data.forEach((item, index) => {
    const node = new Node(item.label, index * 100, 0, 64, 64);
    node.setImage(item.image);
    node.css({
      // fillStyle: item.color || "orange",
      font: "bold 14px arial",
    });
    layer.addChild(node);
  });
}

//关闭节点信息
function handleClose(val) {
  state.isShowInfo = val;
}
//更新节点数据
function handleUpdateNode(val) {
  let { formData, targetNode } = val;
  targetNode.text = formData.text;
  targetNode.id = formData.id;
}
//存储拖拽的节点对象
function handleDragedNode(dragNode) {
  state.dragItem = dragNode;
}
</script>

<style scoped>
.drawContainer {
  height: calc(100vh - 50px);
  /* 占满全部宽度后页面疯狂抖动 */
  width: calc(100% - 1px);
  /* border: 1px solid gray; */
}

.nodeInfoBox {
  position: absolute;
  right: 20px;
  top: 50px;
  z-index: 100;
  width: 30vh;
  height: auto;
}

/* 拖拽模板 */
.componentBox {
  position: absolute;
  left: 0px;
  top: 50px;
  z-index: 100;
  width: 50px;
  height: auto;
}

/* 设置画布高度 */
:deep(.layer_container) {
  height: 100% !important;
}
</style>
