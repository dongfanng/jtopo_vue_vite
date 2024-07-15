<template>
  <div class="component-box">
    <div
      v-for="(node, index) in nodes"
      :key="index"
      :draggable="true"
      @dragstart="(e) => dragStart(node, e)"
      @dragend="(e) => dragEnd(node, e)"
      @mouseup="(e) => handleMouseUp(node, e)" 
      @dragover.prevent
      class="draggable-node"
    >
      <img :src="node.image" :alt="node.text" class="imgTemplate" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  draggedTemplate: null,
});
const emit = defineEmits(["dragedModel", "dragedEnd"]);

const nodes = [
  {
    label: "Node A",
    color: "orange",
    image: "src/assets/img/cloud.png",
  },
  { label: "Node B", color: "blue", image: "src/assets/img/host.png" },
  {
    label: "Node C",
    color: "green",
    image: "src/assets/img/monitor.png",
  },
  { label: "Node D", color: "red", image: "src/assets/img/monitor.png" },
];

const dragStart = (node, event) => {
  // 将节点数据转换为 JSON 字符串，并将其放入拖动事件的数据传输中
  event.dataTransfer.setData("application/json", JSON.stringify(node));
  state.draggedTemplate = node;
  // console.log("拖拽数据已设置:", state.draggedTemplate);
};

const dragEnd = (node, event) => {
  const screenX = event.pageX;
  const screenY = event.pageY;
  // const screenX = event.layerX;
  // const screenY = event.layerY;
  const dataNode = {
    ...node,
    screenX: screenX,
    screenY: screenY,
  };
  emit("dragedEnd", dataNode);
};

const handleMouseUp = (node, event) => {
  // console.log("handleMouseUp");
  // 在这里可以添加处理鼠标放置的逻辑，比如触发画布中的节点创建
};
</script>

<style scoped>
.component-box {
  border: 1px solid #ccc;
  padding: 10px;
}

.draggable-node {
  margin: 5px;
  padding: 5px;
  background-color: #f0f0f0;
  cursor: move;
}
.imgTemplate {
  width: 50px;
  height: 50px;
}
</style>
