<template>
  <div class="component-box">
    <div
      v-for="(node, index) in leftPanelConfig.items"
      :key="index"
      :draggable="true"
      @dragstart="(e) => handleDragged(node, e)"
      @dragover.prevent
      class="draggable-node"
    >
      <img :src="node?.imgSrc" :alt="node?.className" class="imgTemplate" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { leftPanelConfig } from "../DataService";
const state = reactive({
  draggedTemplate: null,
});
const emit = defineEmits("draggedNode");

// 将节点数据转换为 JSON 字符串，并将其放入拖动事件的数据传输中
const handleDragged = (node, event) => {
  event.dataTransfer.setData("application/json", JSON.stringify(node));
  state.draggedTemplate = node;
  //不需要拖拽结束位置，若拖拽结束在emit,会和画布mouseDwon事件重叠,节点数据更新会在拖拽创建新节点之后
  //传递当前抓取模板给父组件
  emit("draggedNode", state.draggedTemplate);
};
</script>

<style scoped>
.component-box {
  width: 60px;
  height: auto;
  border: 1px solid #ccc;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
}

.imgTemplate {
  width: 50px;
  height: 50px;
  cursor: move;
}
</style>
