<script setup lang="ts">
import Container from '@/components/Container.vue';
// import AuthModal from '@/components/AuthModal.vue';

import { ref } from 'vue';

//states
const visible = ref<boolean>(false);


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
                        enter-button="Search"
                        size="large"
                    />
                </div>

                <div class="left-content">
                    <div class="pre-auth-container">
                        <a-button type="primary" shape="round" @click="showModal">openModal</a-button>
                        <a-modal v-model:visible="visible" title="openModal" @ok="handleOk"></a-modal>
                    </div>
                    <div class="post-auth-container">
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
</style>