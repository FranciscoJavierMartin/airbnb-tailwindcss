<template>
  <details class="overflow-hidden search-card">
    <summary class="text-xl font-extrabold">When's your trip?</summary>
    <!-- Tab selector -->
    <div
      class="grid items-center grid-cols-3 p-1 my-4 text-sm font-bold text-center bg-gray-200 rounded-full"
    >
      <div
        class="rounded-full border border-[#dddddd] bg-white py-1.5 text-center text-sm"
      >
        Dates
      </div>
      <div class="text-center">Months</div>
      <div class="text-center">Flexible</div>
    </div>

    <!-- Tabs -->
    <div>
      <!-- Dates -->
      <!-- <div></div> -->

      <!-- Months -->
      <!-- <div></div> -->

      <!-- Flexible -->
      <div class="">
        <div class="pt-3 border-t border-gray-200">
          <div class="mb-2 font-semibold">Stay for a {{ stayForA }} ?</div>
          <div
            class="grid items-center justify-between grid-cols-3 gap-4 text-sm"
          >
            <button
              class="selected-stay"
              :class="{ active: stayForA === 'weekend' }"
              :disabled="stayForA === 'weekend'"
              @click="stayForA = 'weekend'"
            >
              Weekend
            </button>
            <button
              class="selected-stay"
              :class="{ active: stayForA === 'week' }"
              :disabled="stayForA === 'week'"
              @click="stayForA = 'week'"
            >
              Week
            </button>
            <button
              class="selected-stay"
              :class="{ active: stayForA === 'month' }"
              :disabled="stayForA === 'month'"
              @click="stayForA = 'month'"
            >
              Month
            </button>
          </div>
        </div>
        <div class="pt-3 mt-3 border-t border-gray-200">
          <div class="mb-2 font-semibold">Go anytime</div>
          <div
            class="flex gap-2 px-6 -mx-6 overflow-x-scroll no-scrollbar flex-nowrap"
          >
            <button
              v-for="month of months"
              :key="month"
              class="w-[114px] flex-none rounded-2xl border border-gray-300 py-2 text-center"
            >
              <Calendar />
              <div class="mt-1 text-sm font-medium">
                {{ month }}
                <div>2025</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </details>
</template>

<script setup lang="ts">
import Calendar from '@/components/icons/calendar.vue';
const stayForA = ref<string>('...');

const months = [
  'January',
  'Febraury',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
</script>

<style lang="postcss">
.selected-stay {
  @apply rounded-full border border-gray-300 px-3 py-1.5;

  &.active {
    @apply border-2 border-gray-900 bg-gray-200;
  }
}
</style>
