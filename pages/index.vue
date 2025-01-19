<template>
  <div>
    <h1>Hello</h1>
    <NuxtImg :src="images[0]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const images = ref<any[]>(['search/africa.jpg']);
</script>
