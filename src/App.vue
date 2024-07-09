<template>
  <!-- jtopo用于渲染的div -->
  <div
    id="divId"
    style="height: calc(100vh - 50px); width: 100%px; border: 1px solid gray"
  ></div>
</template>

<script setup>
import { onMounted } from "vue";
import { init } from "./TopoManager";

onMounted(() => {
  init(document.getElementById("divId"));
});
</script>
