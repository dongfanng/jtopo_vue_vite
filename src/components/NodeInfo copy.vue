<template>
  <div class="infoBox" v-show="showInfo">
    <n-card title="节点信息" closable @close="handleClose">
      <n-form
        label-width="80px"
        label-placement="left"
        ref="formRef"
        :model="state.formData"
        :rules="rules"
        size="small"
      >
        <n-form-item label="节点名称" path="text">
          <n-input v-model:value="state.formData.text" />
        </n-form-item>
        <n-form-item label="节点ID" path="id">
          <n-input v-model:value="state.formData.id" readonly />
        </n-form-item>
        <div class="btnList">
          <n-button type="info" @click="handleSubmit" class="btn">
            提交
          </n-button>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch, ref } from "vue";
import { NCard, NButton, NForm, NInput, NFormItem, useMessage } from "naive-ui";

const message = useMessage();
const emit = defineEmits(["update:showInfo", "nodeForm"]);
const props = defineProps({
  nodeTarget: {
    type: Object,
    default: () => null,
  },
  showInfo: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  formData: {
    id: "",
    text: "",
  },
});

const formRef = ref(null);
const showInfo = computed({
  get() {
    return props.showInfo;
  },
  set(val) {
    emit("update:showInfo", val);
  },
});

watch(
  () => props.nodeTarget,
  (newVal) => {
    if (newVal) {
      state.formData.id = newVal.id;
      state.formData.text = newVal.text;
    }
  },
  { immediate: true }
);

const handleClose = () => {
  showInfo.value = false;
  console.log("关闭卡片");
};

const handleSubmit = () => {
  formRef.value?.validate(async (errors) => {
    emit("nodeForm", {
      formData: state.formData,
      targetNode: props.nodeTarget,
    });
    message.success("修改成功");
  });
};

const rules = {
  text: {
    required: true,
    message: "请输入节点名称",
    trigger: "change",
  },
};
</script>

<style scoped lang="scss">
.infoBox {
  width: 100%;
  height: auto;
}
</style>
