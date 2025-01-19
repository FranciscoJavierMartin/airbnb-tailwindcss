<template>
  <header>
    <div class="flex items-center justify-between gap-4 px-6 pt-[14px]">
      <div class="flex-grow">
        <button
          @click="isSearchModalOpen = true"
          class="flex items-center w-full gap-4 px-4 py-2 border border-gray-200 rounded-full shadow-md"
        >
          <MagnifyingGlass />
          <span class="text-left">
            <span class="block font-semibold text-airbnb-gray-dark">
              Anywhere
            </span>
            <span class="block text-xs text-airbnb-gray-light">
              Any week &middot; Add guests
            </span>
          </span>
        </button>
      </div>
      <div class="p-2 border border-gray-400 rounded-full">
        <AdjustmentsHorizontal />
      </div>
    </div>

    <SearchModal v-if="isSearchModalOpen" @close="isSearchModalOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MagnifyingGlass from '@/components/icons/magnifying-glass.vue';
import AdjustmentsHorizontal from '@/components/icons/adjustments-horizontal.vue';
import SearchModal from '@/components/header/search-modal.vue';

const isSearchModalOpen = ref<boolean>(true);
</script>
