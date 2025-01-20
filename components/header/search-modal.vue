<template>
  <dialog
    id="searchModal"
    class="absolute top-0 flex flex-col justify-between bg-gray-100 size-full"
  >
    <div class="relative flex items-center justify-center p-6">
      <div
        class="absolute left-6 rounded-full border border-gray-300 bg-white p-1.5"
      >
        <button class="flex" @click="$emit('close')">
          <XMark />
        </button>
      </div>
      <div class="flex justify-center gap-4">
        <button
          class="font-bold text-black underline decoration-2 underline-offset-8"
        >
          Stays
        </button>
        <button class="font-bold text-airbnb-gray-light">Experiences</button>
      </div>
    </div>

    <div class="flex flex-col flex-grow gap-2 px-3">
      <WhereTrip />
      <WhenTrip />
    </div>

    <div class="flex items-center justify-between px-6 py-2 bg-white">
      <a href="#" class="font-semibold underline">Clear all</a>
      <button
        class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e61d4d] to-[#d70666] px-6 py-3 font-medium text-white"
      >
        <MagnifyingGlass />
        <span>Search</span>
      </button>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import MagnifyingGlass from '@/components/icons/magnifying-glass.vue';
import XMark from '@/components/icons/x-mark.vue';
import WhereTrip from '@/components/search-modal/where-trip.vue';
import WhenTrip from '@/components/search-modal/when-trip.vue';

defineEmits(['close']);
</script>

<style>
details > summary {
  list-style: none;
}

/* details[open] > summary {
  display: none;
} */

details > summary::-webkit-details-marker {
  display: none;
}
</style>
