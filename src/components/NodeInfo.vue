<template>
  <div class="infoBox" v-show="showInfo">
    <n-card title="节点信息" closable @close="handleClose">
      <n-form label-width="100px" label-placement="left" ref="formRef" :model="state.formData" :rules="rules"
        size="small" label-align="left">
        <n-form-item label="节点名称:" path="text">
          <n-text v-if="!state.isEditor">{{ state.formData.text }}</n-text>
          <n-input v-else v-model:value="state.formData.text" />
        </n-form-item>
        <n-form-item label="节点ID:" path="id">
          <n-text>{{ state.formData.id }}</n-text>
        </n-form-item>
        <div class="btnList">
          <n-button type="info" v-if="!state.isEditor" @click="state.isEditor = true">
            修改
          </n-button>
          <n-button type="info" v-else @click="handleSubmit"> 保存 </n-button>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script setup>
import { computed, reactive, watch, ref } from "vue";
import {
  NCard,
  NButton,
  NForm,
  NInput,
  NFormItem,
  useMessage,
  NText,
} from "naive-ui";

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
  isEditor: false,
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

function handleSubmit(e) {
  e.preventDefault();
  const messageReactive = message.loading("Verifying", {
    duration: 0,
  });
  formRef.value?.validate((errors) => {
    if (!errors) {
      emit("nodeForm", {
        formData: state.formData,
        targetNode: props.nodeTarget,
      });
      state.isEditor = false;
      message.success("修改成功");
    } else {
      message.error("Invalid");
      console.log("errors", errors);
    }
    messageReactive.destroy();
  });
}

const rules = {
  text: {
    required: true,
    message: "请输入节点名称",
    trigger: ["input", "blur"],
  },
};
</script>

<style scoped lang="scss">
.infoBox {
  width: 100%;
  height: auto;
}

.btnList {
  display: flex;
  flex-flow: row nowrap;
  flex-direction: row-reverse;
}
</style>
