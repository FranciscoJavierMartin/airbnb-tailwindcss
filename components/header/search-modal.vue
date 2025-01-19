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

    <div class="flex-grow px-3">
      <!-- <WhereTrip /> -->

      <div class="search-card">
        <div class="text-xl font-extrabold">When's your trip?</div>
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
            <div class="py-2 border-gray-200 border-y">
              <div class="mb-2 font-semibold">Stay for a ... ?</div>
              <div class="flex items-center justify-between gap-4 text-sm">
                <div class="rounded-full border border-gray-300 px-3 py-1.5">
                  Weekend
                </div>
                <div
                  class="rounded-full border-2 border-gray-900 bg-gray-200 px-3 py-1.5"
                >
                  Week
                </div>
                <div class="rounded-full border border-gray-300 px-3 py-1.5">
                  Month
                </div>
              </div>
            </div>
            <div class="py-2 border-gray-200 border-y">
              <div class="mb-2 font-semibold">Stay for a ... ?</div>
              <div class="flex items-center justify-between gap-4 text-sm">
                <div class="rounded-full border border-gray-300 px-3 py-1.5">
                  Weekend
                </div>
                <div
                  class="rounded-full border-2 border-gray-900 bg-gray-200 px-3 py-1.5"
                >
                  Week
                </div>
                <div class="rounded-full border border-gray-300 px-3 py-1.5">
                  Month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
defineEmits(['close']);
</script>
