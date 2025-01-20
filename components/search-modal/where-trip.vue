<template>
  <details class="overflow-hidden search-card">
    <summary class="text-xl font-extrabold">Where to?</summary>
    <div
      class="flex items-center gap-2 p-4 my-4 text-sm font-medium border border-gray-400 rounded-xl text-airbnb-gray-light"
    >
      <MagnifyingGlass />
      Search destinations
    </div>

    <div
      class="flex gap-5 px-6 -mx-6 overflow-x-scroll no-scrollbar flex-nowrap"
    >
      <div v-for="place of places" :key="place.text" class="flex-none w-32">
        <button class="border border-gray-300 rounded-xl">
          <NuxtImg
            :src="`search/${place.image}`"
            :alt="place.text"
            class="rounded-xl"
          />
          <div class="text-sm font-medium">{{ place.text }}</div>
        </button>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import MagnifyingGlass from '@/components/icons/magnifying-glass.vue';

const places = [
  {
    image: 'flexible-search.jpg',
    text: 'Flexible search',
  },
  {
    image: 'southamerica.jpg',
    text: 'South America',
  },
  {
    image: 'italy.jpg',
    text: 'Italy',
  },
  {
    image: 'usa.jpg',
    text: 'USA',
  },
  {
    image: 'portugal.jpg',
    text: 'Portugal',
  },
  {
    image: 'caribe.jpg',
    text: 'Caribe',
  },
  {
    image: 'uk.jpg',
    text: 'UK',
  },
  {
    image: 'africa.jpg',
    text: 'Africa',
  },
  {
    image: 'germany.jpg',
    text: 'Germany',
  },
];
</script>
