<script setup lang="ts">

import { reactive } from 'vue'
const data = reactive({
    id: 1,
    username: 'Ross',
    img : 'https://i0.wp.com/www.valleymagazinepsu.com/wp-content/uploads/2022/12/friends-ross-geller.jpg?fit=1241%2C1241',
    caption : "I'm fine",
    likes : 2
})
</script>
<template>
    <a-card style="width: 15%" :title="data.username" :avatar="data.img">
        <template #cover>
            <img :src="data.img" />
        </template>
        <div class="caption">
            <a-card-meta #description> {{ data.caption }} </a-card-meta>
            <a-checkbox>{{ data.likes }}</a-checkbox>
        </div>
    </a-card>
</template>

<style scoped>
.caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>