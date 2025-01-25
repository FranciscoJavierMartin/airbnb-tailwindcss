<template>
  <div class="no-scrollbar h-[400px] overflow-y-scroll text-center">
    <div
      v-for="({ daysOfMonth, monthName, startsOn }, index) of calendar"
      :key="`${monthName}_${index}`"
      class="py-4"
    >
      <span class="-mx-6 mb-1 px-0 pb-1.5 font-semibold capitalize">
        {{ monthName }} {{ currentYear }}
      </span>
      <hr class="-mx-6 py-1.5" />
      <ol class="grid grid-cols-7 p-0 m-0 list-none">
        <li
          v-for="dayName of weekDays"
          :key="`${monthName}_${dayName}`"
          class="mb-0.5 pb-2 text-center text-[1.5ch] text-xs font-semibold capitalize text-[#717171]"
        >
          {{ dayName }}
        </li>
        <li
          v-for="(day, dayIndex) of Array(daysOfMonth).keys()"
          :key="`${monthName}_${day}_day`"
          class="text-[1.5ch]"
          :class="{ 'first-day': dayIndex === 0 }"
          :style="{ '--first-day-start': startsOn }"
        >
          {{ day + 1 }}
        </li>
      </ol>
    </div>
  </div>
  <hr class="my-3 -mx-6" />
  <div
    class="flex items-center gap-2 pl-6 -mx-6 overflow-x-scroll text-xs no-scrollbar flex-nowrap whitespace-nowrap"
  >
    <div class="rounded-full border-2 border-gray-900 bg-gray-100 px-3 py-1.5">
      Exact dates
    </div>
    <div
      class="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5"
    >
      <PlusMinus />
      1 day
    </div>
    <div
      class="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5"
    >
      <PlusMinus />
      2 days
    </div>
    <div
      class="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5"
    >
      <PlusMinus />
      3 days
    </div>
    <div
      class="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5"
    >
      <PlusMinus />
      7 days
    </div>
  </div>
  <hr class="my-3 -mx-6" />
  <div class="flex items-center justify-between py-2 bg-white">
    <a href="#" class="font-semibold underline"> Omit </a>
    <button
      class="flex items-center gap-2 rounded-xl bg-[#222222] px-6 py-3 text-white"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import PlusMinus from '@/components/icons/plus-minus.vue';

const currentYear: number = new Date().getFullYear();
const locale = 'en';

const intlForMonths = new Intl.DateTimeFormat(locale, { month: 'long' });
const months = [...Array(12).keys()];

const intlForWeeks = new Intl.DateTimeFormat(locale, { weekday: 'short' });
const weekDays = [...Array(7).keys()].map((dayIndex) =>
  // dayIndex + 3 -> Monday is the first day of week
  intlForWeeks.format(new Date(currentYear, 2, dayIndex + 3)),
);

const calendar = months.map((monthIndex) => {
  const monthName = intlForMonths.format(new Date(currentYear, monthIndex));
  const nextMonthIndex = (monthIndex + 1) % 12;
  const daysOfMonth = new Date(currentYear, nextMonthIndex, 0).getDate();
  const startsOn = new Date(currentYear, monthIndex, 1).getDay();

  return {
    daysOfMonth,
    monthName,
    startsOn,
  };
});
</script>

<style>
.first-day {
  grid-column-start: var(--first-day-start, 0);
}

.search-dates-table {
  @apply border-separate;

  td {
    @apply relative box-border h-[43px] w-[45px] cursor-default border-0 bg-white p-0 text-center text-[rgb(34,34,34)];
  }

  .date {
    @apply relative mx-1 flex flex-col items-center justify-center rounded-full border-[1.5px] border-solid border-white text-sm font-semibold text-[rgb(34,34,34)];
  }

  .date-disabled {
    @apply text-[rgb(72,72,72)] no-underline opacity-25;
  }
}
</style>
