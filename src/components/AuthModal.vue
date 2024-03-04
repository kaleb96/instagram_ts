<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

// state
const store = useStore();
const visible = ref<boolean>(false);
const credentail = reactive({
  
  username: '',
  email: '',
  password: ''

});

const props = defineProps(['isLogin']);

//functions
const showModal = (): void => {

    visible.value = true;
    console.log(visible.value);
}

const handleOk = (e: string) => {
    
    console.log({credentail});
    // const response = store.validate(e)

    // console.log( response )
}

const cancel = () => {}
const submit = () => {}

onMounted(() => {
    console.log(visible.value);
})
</script>

<template>
    <div>
      <a-button type="primary" shape="round" class="btn" @click="showModal">{{ props.isLogin ? 'Login' : 'SignUp'}}</a-button>
      <a-modal v-model:visible="visible" title="signUp" @ok="handleOk">
        <template #footer>
          <a-button key="back" @click="cancel">Cancel</a-button>
          <a-button 
            key="submit"
            type="primary"
            @click="handleOk">submit</a-button>
        </template>
        <div >
          <a-input class="input" v-model:value="credentail.username" placeholder="username"></a-input>
          <a-input class="input" v-model:value="credentail.email" placeholder="email"></a-input>
          <a-input class="input" v-model:value="credentail.password" type=password placeholder="password"></a-input>
        </div>
      </a-modal>
    </div>
  </template>

<style scoped>

</style>



