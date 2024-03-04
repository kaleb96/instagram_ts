<script setup lang="ts">
import Container from '@/components/Container.vue';
import AuthModal from '@/components/AuthModal.vue';

import { ref } from 'vue';

//states
const visible = ref<boolean>(false);
const isLogin = ref<boolean>(false);

//functions
const goProfile = (): void => {

}

const showModal = (e : MouseEvent) => {
    console.log(e);
    visible.value = true;
}


const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false
}
</script>
<template>
    <a-layout-header>
        <Container>
            <div class="nav-container">
                <div class="right-content">
                    <a-input-search
                        placeholder="input search text"
                        enter-button="Search..."
                        size="large"
                    />
                </div>
                <div class="left-content">
                    <div class="auth-container" v-if="!isLogin">
                        <AuthModal :isLogin="true" />
                        <AuthModal :isLogin="false" />
                    </div>
                    <div class="auth-container" v-if="isLogin">
                        <a-button type="primary" shape="round">Profile</a-button>
                        <a-button type="primary" shape="round">Logout</a-button>
                    </div>
                </div>
            </div>
        </Container>
    </a-layout-header>

</template>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}

.right-content {
    display: flex;
    align-items: center;
}

.left-content {
    display: flex;
    align-items: center;
}

.auth-container {
    display: flex;
    align-items: center;
}

.right-content a {
    margin-right: 30px;
}

.auth-content button {
    margin-left: 10px;
}
</style>