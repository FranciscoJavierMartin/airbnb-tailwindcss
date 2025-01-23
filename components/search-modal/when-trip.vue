<template>
  <details class="overflow-hidden search-card" open>
    <summary class="text-xl font-extrabold">When's your trip?</summary>
    <!-- Tab selector -->
    <div
      class="grid items-center grid-cols-3 p-1 my-4 text-sm font-bold text-center bg-gray-200 rounded-full"
    >
      <button
        class="tab"
        :class="{ selected: tabSelected === 0 }"
        @click="tabSelected = 0"
      >
        Dates
      </button>
      <button
        class="tab"
        :class="{ selected: tabSelected === 1 }"
        @click="tabSelected = 1"
      >
        Months
      </button>
      <button
        class="tab"
        :class="{ selected: tabSelected === 2 }"
        @click="tabSelected = 2"
      >
        Flexible
      </button>
    </div>

    <!-- Tabs -->
    <div>
      <!-- Dates -->
      <WhenTripDates v-if="tabSelected === 0" />

      <!-- Months -->
      <WhenTripMonths v-if="tabSelected === 1" />

      <!-- Flexible -->
      <WhenTripFlexible v-if="tabSelected === 2" />
    </div>
  </details>
</template>

<script setup lang="ts">
import WhenTripDates from './when-trip-dates.vue';
import WhenTripFlexible from './when-trip-flexible.vue';
import WhenTripMonths from './when-trip-months.vue';
const tabSelected = ref<number>(0);
</script>

<style lang="postcss">
.tab {
  @apply text-center;

  &.selected {
    @apply rounded-full border border-[#dddddd] bg-white py-1.5 text-sm;
  }
}
</style>
