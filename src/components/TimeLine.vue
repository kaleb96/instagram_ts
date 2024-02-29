<script setup lang="ts">
import Container from '@/components/Container.vue'
import Card from '@/components/Card.vue'
</script>
<template>
    <Container>
        <div class="timeline-container">
            <Card />
        </div>
    </Container>
</template>

<style>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>