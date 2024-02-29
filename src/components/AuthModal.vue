<script setup lang="ts">
import { ref, onMounted } from 'vue';

const visible = ref<boolean>(false);

const showModal = (): void => {

    visible.value = true;
    console.log(visible.value);
}

const handleOk = (): void => {
    
}

onMounted(() => {
    console.log(visible.value);
})
</script>

<template>
    <div>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal v-model:open="visible" title="Basic Modal" @ok="handleOk">
      </a-modal>
    </div>
  </template>

<style scoped>

</style>