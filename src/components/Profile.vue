<script setup>
import { ref } from 'vue';

const visible = ref(false);

const showModal = () => {
    visible.value = true;
};

const handleOk = async (e) => {
    
   
                visible.value = false;
};

</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">open Modal</a-button>
    <a-modal v-model:visible="visible" title="Login" @ok="handleOk">
        <template #footer>
            <a-button key="back" @click="handleCancel">Cancel</a-button>
            <a-button 
                :disabled="loading"
                key="submit" 
                type="primary" 
                :loading="loading" 
                @click="handleOk">Submit
            </a-button>
        </template>
        <div v-if="!loading" class="input-container">
            <a-input class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="UserName"></a-input>
            <a-input class="input" v-model:value="userCredentials.email" placeholder="Email"></a-input>
            <a-input class="input" v-model:value="userCredentials.password" placeholder="Password" type="password"></a-input>
        </div>
        <div v-else class="spinner">
            <a-spin/>
        </div>
        <a-typography-text v-if="errorMessage" type="danger">{{ errorMessage }}</a-typography-text>
    </a-modal>
    {{ user }}
  </div>
</template>

<style scoped>
.btn {
    margin-left : 10px;
}

.input {
    margin-top : 5px;
}

.input-container {
    height: 120px;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content : center;
    height: 120px;
}
</style>